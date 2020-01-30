import React from "react";
import BootstrapButton from "react-bootstrap/Button";
import "./button.scss";
export const Button = (props: RequiredInput) => {
  return (
    <>
      <BootstrapButton
        className={`d-button ${props.variant ? props.variant : ""} ${
          props.className ? props.className : ""
        }`}
        onClick={props.onClick}
      >
        {props.children}
      </BootstrapButton>
    </>
  );
};

interface RequiredInput {
  variant?: "small-green" | "big-red" | "big-green";
  onClick?: (event: any) => void;
  children?: React.ReactNode;
  className?: string;
}
