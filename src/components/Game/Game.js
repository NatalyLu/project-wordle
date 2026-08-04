import React from "react";

import GuessInput from "../GuessInput";
import UserGuesses from "../UserGuesses";
import FinalBanner from "../FinalBanner";

import { sample, createWordObj } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isRightGuess, setIsRightGuess] = React.useState(false);

  const isGameOver = guesses.length >= NUM_OF_GUESSES_ALLOWED || isRightGuess;

  const handleSubmitGuess = (guess) => {
    if (isGameOver) return;

    const guessObj = createWordObj(guess, answer);

    setIsRightGuess(guess === answer);
    setGuesses([...guesses, guessObj]); // setGuesses((prev) => [...prev, { id: Date.now(), value: guess }]);
  };

  return (
    <div>
      <UserGuesses words={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <FinalBanner
          isRightGuess={isRightGuess}
          answer={answer}
          count={guesses.length}
        />
      )}
    </div>
  );
}

export default Game;
