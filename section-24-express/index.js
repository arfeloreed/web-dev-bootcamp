import express from "express";

const app = express();
const port = 3000;

// endpoints
app.get("/", function (req, res) {
  // console.log(req.rawHeaders);
  res.send("<h1>Hello Reed pogi!</h1>");
});

app.get("/about/", (req, res) => {
  res.send("<h1>Reed is the pinaka pogi sa buong mundo.</h1>");
});

app.get("/contact/", (req, res) => {
  res.send("<h1>Get in touch.</h1>");
});

// testing statuscodes
app.post("/register/", function (req, res) {
  res.sendStatus(201);
});

app.put("/user/reed/", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/reed/", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/reed/", (req, res) => {
  res.sendStatus(200);
});

// run server
app.listen(port, function () {
  console.log(`Server running in port ${port}.\n`);
});
