"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  clientHandler,
  clientId,
  addClient,
  removeClient,
} = require("./handlers/clientHandlers");

const {
  hangmanId,
  hangmanHandler,
  guessHandle,
} = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  .get("/clients", clientHandler)
  .get("/clients/:id", clientId)
  .post("/new-client", addClient)
  .delete("/remove-client", removeClient)

  .get("/hangman/word/:id", hangmanId)
  .get("/hangman/word", hangmanHandler)
  .get("/hangman/guess/:id/:letter", guessHandle)

  .listen(8000, () => console.log(`Listening on port 8000`));
