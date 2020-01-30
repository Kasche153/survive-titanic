import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./topbar.scss";
import { Pie } from "react-chartjs-2";
import Table from "react-bootstrap/Table";
import { questionsModel } from "models/question-model-handler";
import { Button } from "components/button/Button"
import { Card } from "components/card/Card";
import { Background } from "components/background/background";
import { TreeGraph } from "components/tree-graph/tree-graph";

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
export const Topbar = (props: RequiredInput) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const currentQuestion =
    props.questions && props.questions[props.questions.length - 1];

  const currentSurvivalRate =
    currentQuestion &&
    currentQuestion.survivors &&
    currentQuestion.fatalities &&
    (
      currentQuestion.survivors /
      (currentQuestion.survivors + currentQuestion.fatalities)
    )
      .toString()
      .slice(0, 6);

  return (
    <>
      <div className={"topbar topbar-small overflow-scroll "}>
        <div onClick={() => setIsExpanded(!isExpanded)}>
          <Container>
            <Row>
              <Col>
                <div className="flex">
                  <h5 className="middle">Click here to view stats</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={isExpanded ? "topbar-ext" : ""}>
          <Container>
            {isExpanded && props.questions && (
              <>
                <div className="close" onClick={() => setIsExpanded(false)}>
                  <h1 className="big-x">x</h1>
                </div>
                <Row>
                  <Col sm={12}md={6} lg={6}>
                    <h2 className="text-center">Chances</h2>
                    <div className="">
                    <Pie 
                      data={data(currentQuestion)}
                      options={{ maintainAspectRatio: true }}
                    />
                    </div>
                  </Col>
                  <Col sm={12}md={6} lg={6}>
                    <Container>
                      <Row>
                        <Col lg={6} md={12} sm={12}>
                          <Table striped bordered >
                            <thead>
                              <tr>
                                <th>question</th>
                                <th>answer</th>
                              </tr>
                            </thead>
                            <tbody>
                              {questionsModel
                                .getAnswers()
                                .map((value, index) => (
                                  <tr>
                                    <th className="small-text">
                                      {props.questions &&
                                        props.questions[index].label}
                                    </th>
                                    <th className="small-text">
                                      {value ? "true" : "false"}{" "}
                                    </th>
                                  </tr>
                                ))}
                            </tbody>
                          </Table>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                          <Card>
                            <Container>
                              <Row>
                                <Col>
                                  <h4>Survival Odds</h4>
                                </Col>
                                <Col>
                                  <h4 className="right">
                                    {currentSurvivalRate}
                                  </h4>
                                </Col>
                              </Row>
                            </Container>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h1 className="tree-view-title small-hide"> Tree view </h1>
                    <h1 className="small-show">
                    <a href = "/mobiletree">Tree view</a>
                    </h1>
                 
                  </Col>
                </Row>
                <Row className=" small-hide">
                  <Col>
                    <div className="tree-container">
                      <TreeGraph questions={props.questions}></TreeGraph>
                    </div>
                  </Col>
                </Row>
                <Background></Background>
              </>
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

interface RequiredInput {
  username: string;
  questions?: {
    label?: string;
    survivors?: number;
    fatalities?: number;
    error?: number;
    final?: boolean;
  }[];
  children?: React.ReactNode;
}
