// creating a customize middleware
import express from "express";

// constants
const app = express();
const port = 3000;

// middlewares
function logger(req, res, next) {
  console.log(`Request method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  next();
}
app.use(logger);

// endpoints
app.get("/", (req, res) => {
  res.send("Hello");
});

// runserver
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
