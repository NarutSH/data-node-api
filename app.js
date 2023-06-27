const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const breakdownsRouter = require("./routes/breakdowns");
const mongoose = require("mongoose");

const app = express();

const username = "admin";
const password = "adminpassword";
const db = "data-node-api";

const mongoUrl = `mongodb+srv://${username}:${password}@node-api.fdzisrk.mongodb.net/${db}`;

mongoose.connect(mongoUrl);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/breakdowns", breakdownsRouter);

module.exports = app;
