import React, { useEffect, useState } from "react";
import { Panel } from "components/panel/Panel";
import { Question } from "components/question/Question";
import { Boat } from "components/boat/Boat";
import { BigTitle } from "components/big-title/big-title";
import { Background } from "components/background/background";
import { Input } from "components/input/Input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "components/button/Button";
import { questionsModel } from "models/question-model-handler";
import "./main.scss"

interface IProps {
  onLoad(): void;
  setUsername(username: string): void;
}
export const MainPage = (props: IProps) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    props.onLoad();

    questionsModel.clear();
  }, []);

  return (
    <div>
      <div className="main-content">


      <BigTitle>
        Will you survive <br></br> the Titanic?
      </BigTitle>

      <div className="left">
        <Container>
          <Row>
            <Col>
              <Input
                value={username}
                placeholder="username"
                onChange={setUsername}
              ></Input>
            </Col>
            <Col>
              <Button
                onClick={() => props.setUsername(username)}
                variant="small-green"
              >
                START A NEW GAME
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="/about" className="about-link">
                about this application
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Boat position="bottom-right-big"></Boat>
      </div>
      <Background></Background>
    </div>
  );
};
