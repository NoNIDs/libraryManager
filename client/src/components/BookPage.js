import "date-fns";
import React, { useState, useEffect } from "react";
import { useParams, Redirect, useHistory, useLocation } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from "@material-ui/pickers";

import { createBook, editBook, deleteBook } from "../api/api";
import { useMessage } from "../message.hook";
// import { dateFormatter } from "../../../dateFormatterUtil";

function BookPage(props) {
   // const { bookID } = useParams();
   const history = useHistory();
   const location = useLocation();
   const [stateMode, setStateMode] = useState(location.state.mode);
   const [bookState, setBookState] = useState(location.state.bookData);
   const message = useMessage();
   const [form, setForm] = useState({
      bookName: "",
      authorBook: "",
      publishDate: new Date(),
   });

   useEffect(() => {
      console.log(location.state.mode);
      setForm(location.state.bookData);
      setStateMode(location.state.mode);
   }, [bookState, location.state.bookData, location.state.mode]);

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
               console.log("Response", res.book);
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

   return (
      <div className="page-container">
         <div className="book-page-menu">
            <h1 className="title-page-block">
               {stateMode === "create" ? "Book Name" : bookState.bookName}
            </h1>
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
         <div className="bookPage-container">
            <form onSubmit={handleSubmit}>
               <label className="form-label" htmlFor="bookName">
                  Book Name:{" "}
               </label>
               <TextField
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
               <label className="form-label" htmlFor="authorName">
                  Author Name:{" "}
               </label>
               <TextField
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
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
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

               {/* <TextField
                  disabled
                  id="standard-disabled"
                  name="username"
                  label="Read Only"
                  type="text"
                  value={form.username}
                  onChange={changeHandler}
               /> */}
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
            </form>
         </div>
      </div>
   );
}

export default BookPage;
