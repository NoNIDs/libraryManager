const redis = require("redis");

var client = redis.createClient();
var appModule = require("./index");
var booksModule = require("./routes/books.routes");

appModule.setClient(client);
booksModule.setClient(client);

module.exports = redis;
