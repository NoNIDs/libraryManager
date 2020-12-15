import { useState, useCallback, useEffect } from "react";

const storageName = "userStorage";

export const useAuth = () => {
   const [token, setToken] = useState("");
   const [username, setUsername] = useState("");

   const login = useCallback((username, jwtToken) => {
      setToken(jwtToken);
      setUsername(username);

      localStorage.setItem(
         storageName,
         JSON.stringify({ username: username, token: jwtToken })
      );
   }, []);

   const logout = useCallback(() => {
      setToken(null);
      setUsername(null);

      localStorage.removeItem(storageName);
   }, []);

   useEffect(() => {
      const data = JSON.parse(localStorage.getItem(storageName));
      if (data && data.token) {
         login(data.username, data.token);
      }
   }, [login]);
   return { username, token, login, logout };
};
