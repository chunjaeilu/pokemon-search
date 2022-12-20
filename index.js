const express = require("express");
const app = express();
const ejs = require("ejs");

// pokemon data
const pokemonData = require("./data");

// ejs를 view 엔진으로 설정
app.set("view engine", ejs);

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", function (req, res) {
  res.render("pages/index.ejs", { pokemonData, searchEl: "" });
});

// search
app.get("/search", (req, res) => {
  const searchEl = req.query.search;
  res.render("pages/index.ejs", { searchEl, pokemonData });
});

const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
