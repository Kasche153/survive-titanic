import React from "react";
import "./big-title.scss";
interface IProps {
  children: React.ReactNode;
  className?: string;
}
export const BigTitle = (props: IProps) => {
  return <h1 className={"big-title " + props.className}>{props.children}</h1>;
};
