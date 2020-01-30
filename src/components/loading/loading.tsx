import React from "react";
import StearingWheel from "./steering-wheel.svg";
import "./loading.scss";
export const Loading = () => {
  return (
    <div className="loading">
      <img src={StearingWheel}></img>
    </div>
  );
};
