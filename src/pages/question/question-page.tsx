import React, { useState } from "react";

import { Question } from "components/question/Question";
import { Panel } from "components/panel/Panel";
import { Topbar } from "components/topbar/TopBar";
import { Boat } from "components/boat/Boat";
import { Background } from "components/background/background";
import { LinearGraph } from "components/linear-graph/linear-graph";
import { questionsModel } from "models/question-model-handler";

export const Questions = (props: RequiredInput) => {
  return (
    <div>
      <Topbar
        username={props.username}
        questions={questionsModel.getQuestions()}
      ></Topbar>

      <Panel>
        <div className="middle">
          <Question onChangeQuestion={props.addQuestion}></Question>
        </div>
      </Panel>
      <Boat position="bottom-right-big"></Boat>
      <Background></Background>
    </div>
  );
};
interface RequiredInput {
  testDispatch(): void;
  username: string;
  addQuestion(question: any): void;
  questions: any;
}
