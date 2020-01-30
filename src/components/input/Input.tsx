import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import { Button } from "components/button/Button";
import "./input.scss";
export const Input = (props: RequiredInput) => {
  return (
    <>
      <Form className="input-container">
        <FormControl
          className="input"
          value={props.text}
          placeholder={props.placeholder}
          onChange={
            props.onChange
              ? (e: any) => (props.onChange as any)(e.target.value)
              : undefined
          }
        />
      </Form>
    </>
  );
};

interface RequiredInput {
  value?: string;
  color?: "red" | "blue";
  text?: string;
  children?: React.ReactNode;
  placeholder?: string;
  onChange?(value: string): void;
}
