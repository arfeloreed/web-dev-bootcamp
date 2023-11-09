import express from "express";
import morgan from "morgan";

// constants
const app = express();
const port = 3000;

// middlewares
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
