import React, { useState, useEffect } from "react";
import { Provider as AlertProvider } from "react-alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContext } from "./context/app.context";
import { useAuth } from "./auth.hook";

import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/CommonComponents/PrivateRoute";

import AlertTemplate from "./components/CommonComponents/AlertTemplate";
import Alerts from "./components/CommonComponents/Alerts";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import BookPage from "./components/BookPage";

import "./styles.scss";

function App() {
   const { username, token, login, logout } = useAuth(); // custom hook
   const [isAuthenticated, setAuthenticated] = useState(!!token);
   const [alertState, setAlertState] = useState({ type: "", message: "" });

   const message = (type, message) => {
      // set state for alert
      setAlertState({ type, message });
      // set default state for alert
      setAlertState({ type: "", message: "" });
   };

   useEffect(() => {
      setAuthenticated(!!token);
   }, [token]);

   return (
      <AppContext.Provider
         value={{ token, isAuthenticated, username, login, logout, message }}
      >
         <AlertProvider template={AlertTemplate}>
            <Router>
               <NavBar />
               <Alerts type={alertState.type} message={alertState.message} />
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
         </AlertProvider>
      </AppContext.Provider>
   );
}

export default App;
