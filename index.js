const fs = require("fs");
const express = require("express");
// const config = require("config");
const path = require("path");

const passport = require("passport");
const app = express();
var client;

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));

app.use("/api/books", require("./routes/books.routes"));

// if (process.env.NODE_ENV === "production") {
//    app.use("/", express.static(path.join(__dirname, "client", "build")));

//    app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//    });
// }

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

const PORT = config.get("port") || 8000;

async function start() {
   try {
      client.on("connect", function () {
         console.log("Connected to Redis...");
      });

      fs.readFile("./defaultDb.json", "utf8", function (err, data) {
         if (err) {
            return console.log(err);
         }
         data = JSON.parse(data);
         data.forEach((book_obj) => {
            client.hmset(
               `book:${book_obj.id}`,
               JSON.stringify(book_obj),
               function (err, reply) {
                  if (err) {
                     console.log(err);
                  }
               }
            );
            client.sadd("books", `book:${book_obj}`);
         });

         console.log("Initial data was loaded successfully.");
         res.redirect("/login");
      });

      app.listen(PORT, () =>
         console.log(`App run an http://localhost:${PORT}`)
      );
   } catch (e) {
      console.log("Server Error", e.message);
      process.exit(1);
   }
}

start();

module.exports = {
   setClient: function (inClient) {
      client = inClient;
   },
};
