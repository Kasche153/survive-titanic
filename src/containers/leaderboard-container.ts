import React from "react";
import { connect } from "react-redux";
import { LeaderBoard } from "pages/leaderboard/leaderboard-page";
import { getScores as apiGetScores } from "api/fuctions/get-scores";
import { questionsModel } from "models/question-model-handler";
const mapStateToProps = (state: any) => ({
  username: state.user.username
});

const mapDispatchToProps = (dispatch: any, state: any) => ({
  async getScores(): Promise<
    { username: string; score: number; date: number }[]
  > {
    const scores = await apiGetScores();
    return scores;
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
