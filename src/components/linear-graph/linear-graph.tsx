import React, { useState, useEffect } from "react";

import { Question, getWholeObject } from "api/fuctions/get-question";
import { object } from "prop-types";
import { Bar } from "react-chartjs-2";
interface IProps {
  question?: Question;
  wholeObject?: any;
}

const data = (object: any) => ({
  labels: ["Fatalities", "Survivors"],
  datasets: [
    {
      data: [object.fatalities, object.survivors],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 3
    }
  ]
});

export const LinearGraph = (props: IProps) => {
  const [wholeObject, setWholeObject] = useState({});

  return <>{props.question && <Bar data={data(props.question)}></Bar>}</>;
};
