import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// constant variables
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);
const app = express();
const port = 3000;

// configs
app.use(bodyParser.urlencoded({ extended: true }));

// endpoints
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit/", (req, res) => {
  console.log(req.body);
});

// run server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
