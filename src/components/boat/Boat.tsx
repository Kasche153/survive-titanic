import React from "react";
import "./Boat.scss";
import BoatSource from "./boat.svg";
interface IProps {
  position: "top-left" | "bottom-right-big" | "top-right";
}
export const Boat = (props: IProps) => {
  return (
    <div className={"boat " + props.position}>
      <img src={BoatSource}></img>
    </div>
  );
};
