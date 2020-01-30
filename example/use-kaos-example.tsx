import React, { useState } from "react";
import { Button } from "components/Button";
let myValue = 1000;

function mapState(state: any) {
  const array = [];

  for (const i in state) {
    array.push(<p>{state[i]}</p>);
  }

  return array;
}
export const Home = (props: RequiredProps) => {
  const [state, sasjädfhasdfjhgllbadsf] = useState({
    name: "Erik",
    age: 21,
    adress: "hej",
    postal: 123,
    sex: "male"
  });

  const [age, setAge] = useState(21);
  const [toggle, setToggle] = useState(false);
  const [___, repaint] = useState(false);

  return (
    <>
      {myValue}
      {mapState(state)}
      {toggle ? <h1>TOGGLE</h1> : ""}
      <Button
        onClick={() => setToggle(!toggle)}
        color="red"
        value="TOGGLE"
      ></Button>
      <Button
        onClick={() =>
          sasjädfhasdfjhgllbadsf({ ...state, name: state.name + "gustav" })
        }
        value="setName"
        color="red"
      ></Button>
      <Button
        onClick={() => setAge(age + 1)}
        value="addOneToAge"
        color="red"
      ></Button>
      {___ ? "TRUE" : "FALSE"}
    </>
  );
};

interface RequiredProps {
  name: string;
  age: number;
}
