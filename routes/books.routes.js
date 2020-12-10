const { Router } = require("express");
const auth = require("../middleware");

const router = Router();
var client;

// GET Books API - api/books/
router.get("/", async (req, res) => {
   // const sort = req.query.sort;
   const books_array = [];
   client.smembers("books", function (err, books_list) {
      if (err) {
         res.status(500).json({
            message: "Something went wrong. Please try again",
         });
      }
      // if (sort) res.json(sort_data(sort, data));
      for (book in books_list) {
         client.get(book, function (err, book_data) {
            books_array.push(book_data);
         });
      }
      res.json(books_array);
   });
});

// // POST Books API - api/books/create
// router.post("/create", auth, async (req, res) => {
//    const book = req.body;
//    client.hmset("books", book, function (err, data) {
//       if (err) {
//          res.status(500).json({
//             message: "Something went wrong. Please try again",
//          });
//       }
//       res.status(201).json({ book });
//    });
// });

// // POST Books API - api/books/create
// router.put("/edit/:id", auth, async (req, res) => {
//    const id_book = req.params.id;
//    let find_book = find(id_book);
//    find_book = req.body;
//    client.hmset("books", book, function (err, data) {
//       if (err) {
//          res.status(500).json({
//             message: "Something went wrong. Please try again",
//          });
//       }
//       res.status(201).json({ book });
//    });
// });

// const sort_data = (sort_value, data) => {
//    switch (sort_value) {
//       case "stock":
//          return data.filter((obj) => obj.stock);
//       case "expired":
//          current_date = new Date();
//          return data.filter((obj) => {
//             obj_date = new Date(obj.return_date);
//             return !obj.stock && obj_date.getTime() < current_date.getTime();
//          });
//    }
// };

// const find = (id) => {
//    let data = {};
//    client.hmgetall("books", function (err, data) {
//       if (err) {
//          res.status(500).json({
//             message: "Something went wrong. Please try again",
//          });
//       }
//       data = data.filter((obj) => obj.id === id);
//    });
//    return data;
// };

module.exports = {
   setClient: function (inClient) {
      client = inClient;
   },
   router,
};
