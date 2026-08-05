import React from "react";
import Banner from "../Banner";

function FinalBanner({ isRightGuess, answer, count, handleRestart }) {
  return (
    <>
      {isRightGuess ? (
        <Banner status="happy" handleRestart={handleRestart}>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{count === 1 ? "1 guess" : `${count} guesses`}</strong>.
          </p>
        </Banner>
      ) : (
        <Banner status="sad" handleRestart={handleRestart}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default FinalBanner;
