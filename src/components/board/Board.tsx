import React from "react";
import BootstrapTable from "react-bootstrap/Table";
import { register } from "serviceWorker";
import { create } from "istanbul-reports";
import { objectTypeCallProperty } from "@babel/types";



var data = [{"user": "Player 1", "score":100, "date" : "10/10/00"},
{"user": "Player 1", "score":100, "date" : "10/10/00"},
{"user": "Player 2", "score":12, "date" : "10/10/00"},
{"user": "Player 3", "score":1200, "date" : "10/10/00"},
{"user": "Player 4", "score":100, "date" : "10/10/00"},
{"user": "Player 5", "score":123, "date" : "10/10/00"},
{"user": "Player 6", "score":11, "date" : "10/10/00"},
{"user": "Player 7", "score":66, "date" : "10/10/00"},
{"user": "Player 8", "score":100, "date" : "10/10/00"},
{"user": "Player 9", "score":89, "date" : "10/10/00"},
{"user": "Player 9", "score":89, "date" : "10/10/00"}]


function createElementFromUser(Object : any) {
    return(
        
        <>
            <tr>
                <td>{Object.user}</td>
                <td>{Object.score}</td>
                <td>{Object.date}</td>
            </tr>
        </>
           
        
    )
    
    
}



export const Board = (props: RequiredInput) => {
 return (
 <>
      <BootstrapTable id="table" variant="dark" striped bordered hover>
       <thead>
              <tr>
              <th> USER</th>
              <th> SCORE</th>
              <th> DATE</th>
              </tr>
          </thead>
          <tbody>
              {data.map(createElementFromUser)}
              
          </tbody>
        </BootstrapTable>
    </>
  );
};


interface RequiredInput {
 
}
