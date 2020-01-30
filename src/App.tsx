import React from "react";
import { Switch, Route } from "react-router";
import MainContainer from "./containers/main-container";
import leaderboardContainer from "containers/leaderboard-container";
import "App.scss";
import questionContainer from "containers/question-container";
import finalScoreContainer from "containers/final-score-container";
import mobileTreeContainer from "containers/mobile-tree-container";
import aboutPageContainer from "containers/about-page-container";

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/score" component={finalScoreContainer} />
        <Route exact path="/scoreboard" component={leaderboardContainer} />
        <Route exact path="/question" component={questionContainer} />
        <Route exact path="/mobiletree" component={mobileTreeContainer} />
        <Route exact path="/about" component={aboutPageContainer} />
      </Switch>
    </>
  );
};

export default App;
