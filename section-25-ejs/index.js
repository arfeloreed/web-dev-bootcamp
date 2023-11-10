import express from "express";

// constants
const app = express();
const port = 3000;

// variables
// let day = new Date("November 5, 2023").getDay();
let day = new Date().getDay();
let data;
if (day === 0 || day === 6) {
  data = "It's the weekend, it's time to have fun!";
} else if (0 < day < 6) {
  data = "It's a weekday, it's time to work hard!";
} else {
  data = "Not a valid day.";
}

// endpoints
app.get("/", (req, res) => {
  res.render("index.ejs", {
    h1: data,
  });
});

// server info
app.listen(port, (err) => {
  if (err) {
    console.log("Error in server setup.");
  }
  console.log(`Listening on port ${port}`);
});
