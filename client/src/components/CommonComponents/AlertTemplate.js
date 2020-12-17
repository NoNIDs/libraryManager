import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
   return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
   root: {
      cursor: "pointer",
      width: "100%",
      "& > * + *": {
         marginTop: theme.spacing(2),
      },
   },
}));

export default function AlertTemplate({ options, message, close }) {
   const classes = useStyles();
   return (
      <div className={classes.root}>
         <Snackbar
            open={true}
            autoHideDuration={6000}
            onClose={close}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "right",
            }}
         >
            <Alert onClose={() => close()} severity={options.type}>
               {message}
            </Alert>
         </Snackbar>
      </div>
   );
}
