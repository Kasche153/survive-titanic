import React, { useState } from "react";

export const NameOfComponent = (props: RequiredInput) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

interface RequiredInput {
  name: string;
  age: number;
}
