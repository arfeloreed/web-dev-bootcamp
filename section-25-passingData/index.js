import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

// constants
const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// endpoints
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let numOfLetters = req.body.fName.length + req.body.lName.length;
  res.render("index.ejs", {
    nameLength: numOfLetters,
  });
});

// server listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
