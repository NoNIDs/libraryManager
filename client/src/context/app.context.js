import { createContext } from "react";

function noop() {} //plug function

export const AppContext = createContext({
   isAuthenticated: false,
   username: "",
   login: noop(),
   logout: noop(),
   message: noop(),
});
