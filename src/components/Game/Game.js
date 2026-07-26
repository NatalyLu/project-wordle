import React from "react";

import GuessInput from "../GuessInput";
import UserGuesses from "../UserGuesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, { id: Date.now(), value: guess }]); // setGuesses((prev) => [...prev, { id: Date.now(), value: guess }]);
  };

  return (
    <div>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      <UserGuesses words={guesses} />
    </div>
  );
}

export default Game;
