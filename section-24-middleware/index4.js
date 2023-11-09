import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

// constants
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

// endpoints
app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/submit/", (req, res) => {
  // console.log(req.body);
  res.send(
    `<h1>The name for your band is:</h1><h2>${req.body.street + req.body.pet}</h2>`
  );
});

// run server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
