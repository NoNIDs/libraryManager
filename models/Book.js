const { Schema, model } = require("mongoose");

const schema = new Schema({
   authorBook: { type: String, required: true },
   bookName: { type: String, required: true },
   publishDate: { type: Date, default: Date.now },
   stock: { type: Boolean, required: true, default: true },
   debtor_name: { type: String, default: "" },
   return_date: { type: Date, default: "" },
});

module.exports = model("Book", schema);
