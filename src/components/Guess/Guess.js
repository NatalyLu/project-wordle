import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <li className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value[num]}
        </span>
      ))}
    </li>
  );
}

export default Guess;
