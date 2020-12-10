import { createContext } from "react";

function noop() {} //plug function

export const AuthContext = createContext({
   userId: null,
   login: noop,
   logout: noop,
   isAuthenticated: false,
});
