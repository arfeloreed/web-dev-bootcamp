//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

// constants
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const password = "ILoveProgramming";

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// endpoints
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/check/", (req, res) => {
  if (req.body.password === password) {
    res.sendFile(`${__dirname}/public/secret.html`);
  } else {
    res.sendFile(`${__dirname}/public/index.html`);
  }
});

// runserer
app.listen(port, function () {
  console.log(`Server is running on port ${port}.`);
});
