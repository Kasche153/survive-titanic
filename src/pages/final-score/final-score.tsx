import React, { useEffect } from "react";
import { Background } from "components/background/background";
import { Boat } from "components/boat/Boat";
import { BigTitle } from "components/big-title/big-title";
import { Button } from "components/button/Button";
import { questionsModel } from "models/question-model-handler";
import { Topbar} from "components/topbar/TopBar"
import { Question } from "components/question/Question";


interface IProps {
  toScoreBoard(): void;
  addScore(username: string, score: number): Promise<any>;
}
export const FinalScore = (props: IProps) => {
  useEffect(() => {
    props
      .addScore(
        questionsModel.username || "anonymouse",
        questionsModel.getScore()
      )
      .then(() => {
        questionsModel.setHasBeenSent(true);
      });
  }, []);

  const currentQuestion = questionsModel.getLatestQuestion();
  const survivors = currentQuestion.survivors || 0;
  const fatalities = currentQuestion.fatalities || 0;

  const currentSurvivalRate =
    parseInt(
      ((survivors * 100) / (fatalities + survivors)).toString().slice(0, 2)
    ) + "%";

  return (
    <div>
      
      <div className="height-100 ">
        <div className="width-50 center-vertical">
          <BigTitle className="left medium-text">
            <br></br>your odds
          </BigTitle>
          <div className="flex right width-50">
            <BigTitle className="right middle super-big-text">
              {currentSurvivalRate}
            </BigTitle>
            <Button
              onClick={() => props.toScoreBoard()}
              className="right middle"
              variant="small-green"
            >
              TO SCOREBOARD
            </Button>
          </div>
        </div>
      </div>

      <Boat position="top-right"></Boat>
      <Background></Background>
    </div>
  );
};
