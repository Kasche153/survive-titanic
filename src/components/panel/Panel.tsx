import React, { ReactNode } from "react";
import "./panel.scss";
import "pages/mobiletree/mobile-tree.scss"
interface RequiredProps {
  children: ReactNode;
}
export const Panel = (props: RequiredProps) => {
  return <div className="panel">{props.children}</div>;
};
