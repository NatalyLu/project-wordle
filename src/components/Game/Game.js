import React from "react";

import GuessInput from "../GuessInput";
import UserGuesses from "../UserGuesses";

import { sample, createWordObj } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;

    setGuesses([...guesses, createWordObj(guess)]); // setGuesses((prev) => [...prev, { id: Date.now(), value: guess }]);
  };

  return (
    <div>
      <UserGuesses words={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </div>
  );
}

export default Game;
