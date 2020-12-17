import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function BookCard(props) {
   const history = useHistory();

   const handleViewClick = (event) => {
      event.preventDefault();
      history.push({
         pathname: `/dashboard/${props.data._id}`,
         state: { bookData: props.data, mode: "view" },
      });
   };

   const handleEditClick = (event) => {
      event.preventDefault();
      history.push({
         pathname: `/dashboard/${props.data._id}`,
         state: { bookData: props.data, mode: "edit" },
      });
   };

   const handleDeleteClick = (event) => {
      event.preventDefault();
      props.deleteBook(props.data._id);
   };

   return (
      <div className="books-bookCard-block">
         <div className="books-bookCard-actions">
            <Button
               variant="outlined"
               color="primary"
               onClick={handleViewClick}
            >
               View
            </Button>
            <Button
               variant="outlined"
               color="primary"
               onClick={handleEditClick}
            >
               Edit
            </Button>
            <Button
               variant="outlined"
               color="primary"
               onClick={handleDeleteClick}
            >
               Delete
            </Button>
         </div>
         <div className="books-bookCard-info">
            <p className="bookName">{props.data.bookName}</p>
            <p className="authorBook">{props.data.authorBook}</p>
            <p className="stock">
               {props.data.stock ? "In library" : "At the reader"}
            </p>
         </div>
      </div>
   );
}

export default BookCard;
