import express from "express";
import morgan from "morgan";

// constants
const app = express();
const port = 3000;

// middlewares
app.use(morgan("dev"));

// endpoints
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

// listening to server
app.listen(port, (err) => {
  if (err) {
    console.log("There is an error in running the server.");
  }
  console.log(`Server is running on port ${port}`);
});
