import { hot } from "react-hot-loader/root";
import React, { useState } from "react";

import { AuthContext } from "../context/auth.context";

import LoginPage from "./AuthComponents/LoginPage";
import RegisterPage from "./AuthComponents/RegisterPage";
import PrivateRoute from "../routes/PrivateRoute";

import NavBar from "./NavBar";
import CreatePage from "./CreatePage";
import Dashboard from "./Dashboard";
import BookPage from "./BookPage";

function App() {
   return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
         <Router>
            <NavBar />
            <div className="page-container">
               <Switch>
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/register" component={RegisterPage} />
                  <Route exact path="/dashboard" component={Dashboard}></Route>
                  <Route
                     exact
                     path="/books/:bookID"
                     component={BookPage}
                  ></Route>
                  <Route
                     exact
                     path="/books/create"
                     component={CreatePage}
                  ></Route>
               </Switch>
            </div>
         </Router>
      </AuthContext.Provider>
   );
}

export default hot(App);
