import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retries: 3 });

// get Books query
export const getBooks = (token, sortValue) =>
   new Promise((resolve, reject) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      };

      axios
         .get(`/api/books/?sort=${sortValue}`, config)
         .then((res) => resolve(res.data))
         .catch((err) => {
            reject(err.response.status);
         });
   });

// create Book query
export const createBook = (obj) =>
   new Promise((resolve, reject) => {
      axios
         .post("/api/books/create", obj, getConfig())
         .then((res) => resolve(res.data))
         .catch((err) => {
            reject(err.response.data.message);
         });
   });

// edit Book query
export const editBook = (obj) =>
   new Promise((resolve, reject) => {
      axios
         .put(`/api/books/edit/${obj._id}`, obj, getConfig())
         .then((res) => {
            resolve(res.data);
         })
         .catch((err) => {
            reject(err.response.data.message);
         });
   });

// delete Book query
export const deleteBook = (id) =>
   new Promise((resolve, reject) => {
      axios
         .delete(`/api/books/delete/${id}`, getConfig())
         .then((res) => resolve(res.data.message))
         .catch((err) => {
            reject(err.response.data.message);
         });
   });

// Setup config with token - helper func
const getConfig = () => {
   // Get token from state
   const token = JSON.parse(localStorage.getItem("userStorage")).token;
   // Headers
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };

   // If token, add to headers config
   if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
   }

   return config;
};
