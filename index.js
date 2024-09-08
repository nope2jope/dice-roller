import express from "express";

const app = express();
const port = 3000;

const diceCount = {
  4: 0,
  6: 0,
  8: 0,
  10: 0,
  12: 0,
  20: 0,
}

const diceRolls = {
  4: [],
  6: [],
  8: [],
  10: [],
  12: [],
  20: [],
}

const diceSums = {
  4: 0,
  6: 0,
  8: 0,
  10: 0,
  12: 0,
  20: 0,
}

async function addDice(dice, countTemplate) {

}

async function removeDice(dice, countTemplate) {

}

async function rollDice(dice, step) {

}


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { countData : diceCount });
});

app.post("/", (req, res) => {
  console.log("OK")
  console.log(req)

  res.render("index.ejs", { countData : diceCount })
});

app.listen(port, () => {
    console.log(`Application is listening on ${port}`)
  });