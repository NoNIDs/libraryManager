import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/CommonComponents/PrivateRoute";
import { AppContext } from "./context/app.context";
import { useAuth } from "./auth.hook";

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import BookPage from "./components/BookPage";

import "./styles.scss";

function App() {
   const { username, token, login, logout } = useAuth(); // custom hook
   const [isAuthenticated, setAuthenticated] = useState(!!token);

   useEffect(() => {
      setAuthenticated(!!token);
   }, [token]);

   return (
      <AppContext.Provider
         value={{ token, isAuthenticated, username, login, logout }}
      >
         <Router>
            <NavBar />
            <div className="page-container">
               <Switch>
                  <Route exact path="/login" component={LoginPage} />
                  <PrivateRoute
                     exact
                     path="/dashboard"
                     component={Dashboard}
                     isAuthenticated={isAuthenticated}
                  ></PrivateRoute>
                  <PrivateRoute
                     exact
                     path="/dashboard/:bookID"
                     component={BookPage}
                     isAuthenticated={isAuthenticated}
                  ></PrivateRoute>
                  {/* default route */}
                  <PrivateRoute
                     exact
                     path="*"
                     component={Dashboard}
                     isAuthenticated={isAuthenticated}
                  ></PrivateRoute>
               </Switch>
            </div>
         </Router>
      </AppContext.Provider>
   );
}

export default App;
