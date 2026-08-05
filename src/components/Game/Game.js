import React from "react";

import GuessInput from "../GuessInput";
import UserGuesses from "../UserGuesses";
import FinalBanner from "../FinalBanner";

import { sample, createWordObj } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  const [isRightGuess, setIsRightGuess] = React.useState(false);

  const isGameOver = guesses.length >= NUM_OF_GUESSES_ALLOWED || isRightGuess;

  const handleRestart = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setIsRightGuess(false);
  };

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
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default Game;
