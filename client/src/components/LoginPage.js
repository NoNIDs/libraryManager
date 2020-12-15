import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../context/app.context";
import axios from "axios";

import { TextField, Button } from "@material-ui/core";

function LoginPage() {
   const appContext = useContext(AppContext);
   const [form, setForm] = useState({ username: "", password: "" });

   const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
   };

   const loginHandler = (e) => {
      e.preventDefault();

      const headers = { "Content-Type": "application/json" };
      axios
         .post("/api/auth/login", { ...form }, headers)
         .then((res) => {
            appContext.login(res.data.username, res.data.token);
         })
         .catch((err) => console.log("LOGIN PIZDA"));
   };

   if (appContext.isAuthenticated) {
      return <Redirect to="/dashboard" />;
   }

   return (
      <div className="login-form-container">
         <form onSubmit={loginHandler}>
            <TextField
               id="outlined-username-input"
               name="username"
               label="Username"
               type="text"
               autoComplete="current-username"
               variant="outlined"
               value={form.username}
               onChange={changeHandler}
            />
            <TextField
               id="outlined-password-input"
               name="password"
               label="Password"
               type="password"
               autoComplete="current-password"
               variant="outlined"
               value={form.password}
               onChange={changeHandler}
            />
            <Button color="inherit" type="submit">
               Login
            </Button>
         </form>
      </div>
   );
}

export default LoginPage;
