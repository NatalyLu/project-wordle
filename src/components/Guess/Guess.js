import React from "react";
import { range } from "../../utils";

function Guess({ value, resultLetterStatus }) {
  const getClassName = (index) =>
    `cell${resultLetterStatus ? ` ${resultLetterStatus[index].status}` : ""}`;
  return (
    <li className="guess">
      {range(5).map((num) => (
        <span key={num} className={getClassName(num)}>
          {value[num]}
        </span>
      ))}
    </li>
  );
}

export default Guess;
