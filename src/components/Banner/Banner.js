import React from "react";
import RestartButton from "../RestartButton";

function Banner({ status, children, handleRestart }) {
  return (
    <div className={` ${status} banner`}>
      {children}

      <RestartButton handleRestart={handleRestart} />
    </div>
  );
}

export default Banner;
