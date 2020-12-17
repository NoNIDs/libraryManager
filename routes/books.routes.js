const { Router } = require("express");
const auth = require("../middleware");

const Book = require("../models/Book");
const router = Router();

// GET Books API - api/books/
router.get("/", auth, async (req, res) => {
   try {
      const sort = req.query.sort;
      let books = [];
      switch (sort) {
         case "stock":
            books = await Book.find({ stock: true });
            break;
         case "expired":
            books = await Book.find({ stock: false });
            if (books.length) {
               current_date = new Date();
               books = books.filter((book_obj) => {
                  return_date = new Date(book_obj.returnDate);
                  return current_date > return_date;
               });
            }
            break;
         default:
            books = await Book.find();
      }
      res.json(books);
   } catch (e) {
      res.status(500).json({
         message: "Something went wrong. Please try again",
      });
   }
});

// CREATE Books API - api/books/create
router.post("/create", auth, async (req, res) => {
   try {
      const book = new Book({ ...req.body });
      await book.save();

      res.status(201).json({ book });
   } catch (error) {
      res.status(500).json({
         message: "Something went wrong. Please try again",
      });
   }
});

// EDIT Books API - api/books/edit/:id
router.put("/edit/:id", auth, async (req, res) => {
   const updateObj = { ...req.body };
   await Book.findByIdAndUpdate(
      req.params.id,
      updateObj,
      { new: true },
      (err, book) => {
         if (err)
            res.status(500).json({
               message: "Something went wrong. Please try again",
            });
         res.json({ book });
      }
   );
});

// DELETE Books API - api/books/delete/:id
router.delete("/delete/:id", auth, async (req, res) => {
   await Book.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err)
         res.status(500).json({
            message: "Something went wrong. Please try again",
         });
      res.json({ message: "Book was removed successfully" });
   });
});

module.exports = router;
