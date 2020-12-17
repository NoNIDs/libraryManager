import "date-fns";
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
   modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
   },
}));

export default function AddClientDetailModal(props) {
   const classes = useStyles();
   const [form, setForm] = useState({ readerName: "", returnDate: new Date() });

   const changeHandler = (event) => {
      setForm({ ...form, readerName: event.target.value });
   };
   const changeDateHandler = (date) => {
      setForm({ ...form, returnDate: date });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      props.edit({ ...props.bookData, ...form, stock: false });
   };
   const handleCancelBtn = (event) => {
      event.preventDefault();
      setForm({ readerName: "", returnDate: new Date() });
      props.close();
   };

   return (
      <div className="modal-container">
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.show}
            onClose={props.close}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={props.show}>
               <div className={classes.paper}>
                  <h2 className="title-modal-block">Details about client</h2>
                  <form onSubmit={handleSubmit} className="modal-form">
                     <div className="form-data">
                        <div className="form-label">
                           <label
                              className="form-label-item"
                              htmlFor="readerName"
                           >
                              Reader Name:{" "}
                           </label>
                           <label
                              className="form-label-item"
                              htmlFor="returnDate"
                           >
                              Return Date:{" "}
                           </label>
                        </div>
                        <div className="form-input">
                           <TextField
                              className="form-input-item"
                              required
                              id="standard-required"
                              name="readerName"
                              label="Required"
                              type="text"
                              value={form.readerName}
                              onChange={changeHandler}
                              variant="outlined"
                           />
                           <MuiPickersUtilsProvider
                              className="form-input-item"
                              utils={DateFnsUtils}
                           >
                              <KeyboardDatePicker
                                 margin="normal"
                                 id="date-picker-dialog"
                                 label="Publish date"
                                 format="MM/dd/yyyy"
                                 value={form.returnDate}
                                 onChange={changeDateHandler}
                                 KeyboardButtonProps={{
                                    "aria-label": "change date",
                                 }}
                              />
                           </MuiPickersUtilsProvider>
                        </div>
                     </div>
                     <div className="form-buttons">
                        <Button color="inherit" type="submit">
                           Save
                        </Button>
                        <Button color="inherit" onClick={handleCancelBtn}>
                           Cancel
                        </Button>
                     </div>
                  </form>
               </div>
            </Fade>
         </Modal>
      </div>
   );
}
