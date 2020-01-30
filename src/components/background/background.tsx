import React from "react";
import bg from "./bg.svg";
import "./background.scss";
import "pages/leaderboard/leaderboard.scss"
export const Background = () => {
  return (
    <div className="background scroll">
      <img src={bg}></img>;
    </div>
  );
};
