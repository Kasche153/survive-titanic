import React, { ReactNode } from "react";
import "./Card.scss";
interface IProps {
  children: ReactNode;
}
export const Card = (props: IProps) => {
  return <div className="simple-card">{props.children}</div>;
};
