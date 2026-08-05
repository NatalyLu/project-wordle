import React from "react";

function RestartButton({ handleRestart }) {
  return (
    <button className="restart-button" onClick={handleRestart}>
      Restart Game
    </button>
  );
}

export default RestartButton;
