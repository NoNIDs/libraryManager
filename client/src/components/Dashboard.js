import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import BookCard from "./BookCard";

import { AppContext } from "../context/app.context";
import { getBooks, deleteBook } from "../api/api";

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
}));

const defaultData = {
   bookName: "",
   authorBook: "",
   publishDate: new Date(),
   stock: true,
   readerName: "",
   returnDate: new Date(),
};

function Dashboard() {
   const [books, setBooks] = useState([]);
   const [deleteTrigger, setDeleteTrigger] = useState(false);
   const [sortValue, setSortValue] = React.useState("default");

   // auth context
   const { token, logout, message } = useContext(AppContext);
   const classes = useStyles();
   const history = useHistory();

   useEffect(() => {
      if (token) {
         getBooks(token, sortValue)
            .then((res) => {
               setBooks(res);
            })
            .catch((errStatus) => {
               if (errStatus === 401) logout();
            });
      }
   }, [token, sortValue, deleteTrigger, logout]);

   const handleChangeSort = (event) => {
      setSortValue(event.target.value);
   };
   const handleCreateBtn = (event) => {
      event.preventDefault();
      history.push({
         pathname: "/dashboard/create",
         state: { bookData: defaultData, mode: "create" },
      });
   };
   const handleDeleteBookBtn = (id) => {
      deleteBook(id)
         .then((res) => {
            message("success", res);
            setDeleteTrigger(!deleteTrigger);
         })
         .catch((err) => {
            message("error", err);
         });
   };

   return (
      <div className="page-container">
         <h1 className="title-page-block">Books</h1>
         <div className="books-main-menu">
            <div className="books-sort-menu">
               <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                     Sort by
                  </InputLabel>
                  <Select
                     labelId="demo-simple-select-outlined-label"
                     id="demo-simple-select-outlined"
                     value={sortValue}
                     onChange={handleChangeSort}
                     label="Sort"
                  >
                     <MenuItem value={"default"}>Default</MenuItem>
                     <MenuItem value={"stock"}>In stock</MenuItem>
                     <MenuItem value={"expired"}>Expired</MenuItem>
                  </Select>
               </FormControl>
            </div>
            <Button
               variant="contained"
               color="primary"
               onClick={handleCreateBtn}
            >
               Create book entry
            </Button>
         </div>
         <div className="books-list-block">
            {books.length === 0 ? (
               <p>No data ...</p>
            ) : (
               books.map((book) => (
                  <BookCard
                     key={book._id}
                     data={book}
                     deleteBook={handleDeleteBookBtn}
                  />
               ))
            )}
         </div>
      </div>
   );
}

export default Dashboard;
