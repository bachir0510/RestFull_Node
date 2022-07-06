const express = require("express");
const morgan = require("morgan")
const BooksRouters = require("./routes/book.routes");

const app = express();

app.set("port", 4000);

// middlewares
app.use(morgan('dev'))
app.use(express.json());

// routers
app.use("/api", BooksRouters);

module.exports = app;
