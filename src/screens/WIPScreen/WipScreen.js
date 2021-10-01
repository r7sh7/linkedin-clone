import React from "react";
import "./WipScreen.css";

const WipScreen = () => {
  return (
    <div className="wip">
      <div className="wip__container">
        <img src="/images/work_in_progress.svg" alt="wip" />
        <h1>Sorry! This Section is under progress</h1>
      </div>
    </div>
  );
};

export default WipScreen;
