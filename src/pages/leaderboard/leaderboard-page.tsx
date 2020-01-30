import React, { useState, useEffect } from "react";
import { Button } from "components/button/Button";
import { Board } from "components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { questionsModel } from "models/question-model-handler";
import "./leaderboard.scss";
import { Background } from "components/background/background";
import { Boat } from "components/boat/Boat"

export const LeaderBoard = (props: RequiredProps) => {
  const [score, setScore]: [
    { username: string; score: number; date: number }[],
    any
  ] = useState([]);

  useEffect(() => {
    (async () => {
      const _score = (await props.getScores()).map(v => ({
        ...v,
        score: v.score * 100 + "%"
      }));
      setScore(_score);
    })();
  }, []);

  return (

    <div className="flex score-board-container">
      
      <Background></Background>
      
      

      <div className="score-board middle">
        <h1 className="text">LEADERBOARD</h1>
        <Button
          className="play-again-button"
          onClick={() => (window.location.href = "/")}
        >
          Play again
        </Button>
        <a href="/about" className="leaderboard-about-page">
          about this application
        </a>
        <div className="score">
          <Board data={score}></Board>
        </div>
      </div>
      <Boat position="bottom-right-big"></Boat> 
    </div>
  );
};

interface RequiredProps {
  getScores(): Promise<{ username: string; score: number; date: number }[]>;
}
