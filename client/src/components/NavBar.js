import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { AppContext } from "../context/app.context";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}));

export default function NavBar() {
   const classes = useStyles();
   const appContext = useContext(AppContext);
   const logoutHandler = () => {
      appContext.logout();
   };
   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <Link to="/dashboard" className={classes.title}>
                  Library Manager
               </Link>
               {appContext.isAuthenticated ? (
                  <div className="navbar-auth-block">
                     <p>{appContext.username}</p>
                     <Button color="inherit" onClick={logoutHandler}>
                        Logout
                     </Button>
                  </div>
               ) : (
                  ""
               )}
            </Toolbar>
         </AppBar>
      </div>
   );
}
