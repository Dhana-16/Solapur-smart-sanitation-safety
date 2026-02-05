const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home Route
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
app.get("/worker", (req, res) => {
  res.render("worker");
});
app.get("/municipals", (req, res) => {
  res.render("municipals");
});
app.get("/robots", (req, res) => {
  res.render("robots");
});
app.get("/attendance", (req, res) => {
  res.render("attendance");
});
app.get("/supervisors", (req, res) => {
  res.render("supervisors");
});
module.exports = app;
