import React from "react";
import Guess from "../Guess";

import { range, createWordObj } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UserGuesses({ words }) {
  return (
    <ul className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const wordObj = words[num] || createWordObj();
        return (
          <Guess
            key={`${num}-${wordObj.id}`}
            value={wordObj.value}
            resultLetterStatus={wordObj.resultLetterStatus}
          />
        );
      })}
    </ul>
  );
}

export default UserGuesses;
