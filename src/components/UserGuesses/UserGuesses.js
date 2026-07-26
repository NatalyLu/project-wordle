import React from "react";

function UserGuesses({ words }) {
  return (
    <ul className="guess-results">
      {words.map((wordObj) => (
        <li className="guess" key={wordObj.id}>
          {wordObj.value}
        </li>
      ))}
    </ul>
  );
}

export default UserGuesses;
