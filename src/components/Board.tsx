import React from "react";
import BootstrapTable from "react-bootstrap/Table";

var data = [
  { user: "Player 1", score: 100, date: "10/10/00" },
  { user: "Player 1", score: 100, date: "10/10/00" },
  { user: "Player 2", score: 12, date: "10/10/00" },
  { user: "Player 3", score: 1200, date: "10/10/00" },
  { user: "Player 4", score: 100, date: "10/10/00" },
  { user: "Player 5", score: 123, date: "10/10/00" },
  { user: "Player 6", score: 11, date: "10/10/00" },
  { user: "Player 7", score: 66, date: "10/10/00" },
  { user: "Player 8", score: 100, date: "10/10/00" },
  { user: "Player 9", score: 89, date: "10/10/00" },
  { user: "Player 9", score: 89, date: "10/10/00" },
  { user: "KLARA", score: 89, date: "10/10/00" }
];

function createElementFromUser(object: any) {
  return (
    <>
      <tr>
        <td>{object.username}</td>
        <td>{object.score}</td>
        <td>
          {new Date(object.date)
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "")}
        </td>
      </tr>
    </>
  );
}

export const Board = (props: RequiredInput) => {
  if (!props.data) return <div></div>;
  return (
    <>
    <div className="height-big">
      <BootstrapTable id="table" striped bordered >
        <thead>
          <tr>
            <th> USER</th>
            <th> SCORE</th>
            <th> DATE</th>
          </tr>
        </thead>
        <tbody>{props.data.map(createElementFromUser)}</tbody>
      </BootstrapTable>
      </div>
    </>
  );
};

interface RequiredInput {
  data: { username: string; score: number; date: number }[];
}
