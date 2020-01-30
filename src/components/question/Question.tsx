import React, { useState, useEffect } from "react";
import { Button } from "components/button/Button";
import { api } from "api/api";
import { getQuestion } from "api/fuctions/get-question";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Loading } from "../loading/loading";
import { questionsModel } from "models/question-model-handler";
import { BigTitle } from "components/big-title/big-title";
import "./question.scss";
import { LinearGraph } from "components/linear-graph/linear-graph";

const qustions: {
  label?: string;
  survivors?: number;
  fatalities?: number;
  error?: number;
  final?: boolean;
}[] = [];

export const Question = (props: RequiredInput) => {
  const [answer, setAnswer]: [boolean[], any] = useState(
    questionsModel.getAnswers()
  );

  const [isLoading, setIsLoading] = useState(false);
  const [question, nextQuestion]: [
    {
      label?: string;
      survivors?: number;
      fatalities?: number;
      error?: number;
      final?: boolean;
    },
    any?
  ] = useState(questionsModel.getLatestQuestion() || {});

  let survivalRate =
    question.fatalities &&
    question.survivors &&
    (question.survivors / (question.survivors + question.fatalities))
      .toString()
      .slice(0, 4);

  useEffect(() => {
    if (questionsModel.questionIndex() === -1) updateQ(answer);
  }, []);

  async function updateQ(q: boolean[]) {
    setIsLoading(true);
    const question = await getQuestion(q);
    questionsModel.addQuestion(question);
    qustions.push(question);
    props.onChangeQuestion(question);
    nextQuestion(question);
    setIsLoading(false);
  }

  function Yes() {
    questionsModel.addAnswer(true);
    setAnswer([...answer, true]);
    updateQ([...answer, true]);
  }

  function No() {
    questionsModel.addAnswer(false);
    setAnswer([...answer, false]);
    updateQ([...answer, false]);
  }

  return (
    <>
      <Container>
        {}
        {isLoading && (
          <Row>
            <Col>
              <Loading />
            </Col>
          </Row>
        )}
        {!isLoading && (
          <>
            {!question.final && (
              <>
                <Row>
                  <Col>
                    <h1>{question.label}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant="big-green"
                      onClick={Yes}
                      className="btn-block"
                    >
                      <h1>Yes</h1>
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="big-red"
                      onClick={No}
                      className="btn-block"
                    >
                      <h1>No</h1>
                    </Button>
                  </Col>
                </Row>
              </>
            )}
            <Row>
              <Col>
                <h6>{`Your current survival odds are ${survivalRate}`}</h6>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

interface RequiredInput {
  onChangeQuestion(question: any): void;
}
