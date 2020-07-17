const { words } = require("../data/words");

const hangmanId = (req, res) => {
  const id = req.params.id;
  let wordObj = {};
  words.forEach((word) => {
    if (id == word.id) {
      wordObj = word.word;
      res.status(200).send({ word: wordObj });
    } else {
      res.status(400).send("Word not found.");
    }
  });
};

const hangmanHandler = (req, res) => {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  res
    .status(200)
    .send({ id: randomWord.id, letterCount: randomWord.letterCount });
};

const guessHandle = (req, res) => {
  const id = req.params.id;
  const letter = req.params.letter;
  const hangmanObj = words.find((word) => {
    return id === word.id;
  });
  const wordArray = [];

  const letterArray = hangmanObj.word.split("");

  letterArray.forEach((ltr) => {
    if (ltr === letter) {
      wordArray.push(true);
    } else {
      wordArray.push(false);
    }
  });
  res.status(200).send({ wordArray });
};

module.exports = { hangmanId, hangmanHandler, guessHandle };
