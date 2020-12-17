import "date-fns";
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from "@material-ui/pickers";

import Modal from "./CommonComponents/Modal";

import { createBook, editBook, deleteBook } from "../api/api";
import { AppContext } from "../context/app.context";
import { dateFormatter } from "../dateFormatterUtil";

function BookPage() {
   const history = useHistory();
   const { message } = useContext(AppContext);
   const location = useLocation();
   const [modalShow, setModalShow] = useState(false);
   const [stateMode, setStateMode] = useState(location.state.mode);
   const [bookState, setBookState] = useState(location.state.bookData);
   const [form, setForm] = useState({
      bookName: "",
      authorBook: "",
      publishDate: new Date(),
      stock: true,
      readerName: "",
      returnDate: new Date(),
   });

   useEffect(() => {
      setForm(location.state.bookData);
      setBookState(location.state.bookData);
      setStateMode(location.state.mode);
   }, [location.state.bookData, location.state.mode]);

   const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
   };
   const changeDateHandler = (date) => {
      setForm({ ...form, publishDate: date });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      if (stateMode === "create") {
         createBook(form)
            .then((res) => {
               history.push({
                  pathname: `/dashboard/${res.book._id}`,
                  state: { bookData: res.book, mode: "view" },
               });
            })
            .catch((err) => {
               message("error", err);
            });
      } else {
         editBook(form)
            .then((res) => {
               setBookState(res.book);
               setStateMode("view");
            })
            .catch((err) => {
               message("error", err);
            });
      }
   };

   const changeBookHandler = (event) => {
      event.preventDefault();
      setStateMode("edit");
   };
   const deleteBookHandler = (event) => {
      event.preventDefault();
      deleteBook(bookState._id)
         .then((res) => {
            message("success", res);
            history.push("/dashboard");
         })
         .catch((err) => {
            message("error", err);
         });
   };
   const resetFormHandler = (event) => {
      event.preventDefault();
      setForm(bookState);
      setStateMode("view");
   };

   const giveBookHandler = (event) => {
      event.preventDefault();
      setModalShow(true);
      console.log(bookState);
   };
   const returnBookHandler = (event) => {
      event.preventDefault();
      editBook({
         ...bookState,
         stock: true,
         readerName: "",
         returnDate: new Date(),
      })
         .then((res) => {
            setBookState(res.book);
         })
         .catch((err) => {
            message("error", err);
         });
   };
   const handleEditReaderInfo = (editData) => {
      console.log(editData);
      editBook(editData)
         .then((res) => {
            setBookState(res.book);
            setModalShow(false);
         })
         .catch((err) => {
            message("error", err);
         });
   };
   const handleCloseModal = () => {
      setModalShow(false);
   };

   return (
      <div className="page-container">
         <h1 className="title-page-block">
            {stateMode === "create" ? "Book Name" : bookState.bookName}
         </h1>
         {stateMode === "create" ? (
            ""
         ) : (
            <div className="bookPage-menu">
               <Button
                  variant="outlined"
                  color="primary"
                  onClick={changeBookHandler}
               >
                  Edit
               </Button>
               <Button
                  variant="outlined"
                  color="primary"
                  onClick={deleteBookHandler}
               >
                  Delete
               </Button>
            </div>
         )}
         <div className="bookPage-container">
            <form onSubmit={handleSubmit}>
               <div className="form-data">
                  <div className="form-label">
                     <label className="form-label-item" htmlFor="bookName">
                        Book Name:{" "}
                     </label>
                     <label className="form-label-item" htmlFor="authorName">
                        Author Name:{" "}
                     </label>
                     <label className="form-label-item" htmlFor="authorName">
                        Publish Date:{" "}
                     </label>
                  </div>
                  <div className="form-input">
                     <TextField
                        className="form-input-item"
                        required
                        disabled={stateMode === "view"}
                        id="standard-required"
                        name="bookName"
                        label="Required"
                        type="text"
                        value={form.bookName}
                        onChange={changeHandler}
                        variant="outlined"
                     />

                     <TextField
                        className="form-input-item"
                        required
                        disabled={stateMode === "view"}
                        id="standard-required"
                        name="authorBook"
                        label="Required"
                        type="text"
                        value={form.authorBook}
                        onChange={changeHandler}
                        variant="outlined"
                     />
                     <MuiPickersUtilsProvider
                        className="form-input-item"
                        utils={DateFnsUtils}
                     >
                        <KeyboardDatePicker
                           disabled={stateMode === "view"}
                           margin="normal"
                           id="date-picker-dialog"
                           label="Publish date"
                           format="MM/dd/yyyy"
                           value={form.publishDate}
                           onChange={changeDateHandler}
                           KeyboardButtonProps={{
                              "aria-label": "change date",
                           }}
                        />
                     </MuiPickersUtilsProvider>
                  </div>
               </div>
               <div className="form-buttons">
                  {stateMode === "view" ? (
                     ""
                  ) : (
                     <Button color="inherit" type="submit">
                        Save
                     </Button>
                  )}
                  {stateMode === "edit" ? (
                     <Button color="primary" onClick={resetFormHandler}>
                        Reset
                     </Button>
                  ) : (
                     ""
                  )}
               </div>
            </form>
            {stateMode === "create" ? (
               ""
            ) : (
               <div className="bookPage-reader-block">
                  <p className="">Book status information</p>
                  <div className="bookPage-reader-menu">
                     <Button
                        disabled={!bookState.stock}
                        variant="outlined"
                        color="primary"
                        onClick={giveBookHandler}
                     >
                        Give to the reader
                     </Button>
                     <Button
                        disabled={bookState.stock}
                        variant="outlined"
                        color="primary"
                        onClick={returnBookHandler}
                     >
                        Return a book
                     </Button>
                  </div>
                  <div className="bookPage-reader-info">
                     {bookState.stock ? (
                        <p>Book in the library.</p>
                     ) : (
                        <div className="reader-info">
                           <p>Name: {bookState.readerName}</p>
                           <p>
                              Return date: {dateFormatter(bookState.returnDate)}
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            )}
         </div>
         <Modal
            show={modalShow}
            close={handleCloseModal}
            bookData={bookState}
            edit={handleEditReaderInfo}
         />
      </div>
   );
}

export default BookPage;
