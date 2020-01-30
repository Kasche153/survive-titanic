import { connect } from "react-redux";
import { FinalScore } from "pages/final-score/final-score";
import { addScore as apiAddScore } from "api/fuctions/get-scores";
import { questionsModel } from "models/question-model-handler";

/// funktionalitet kan läggas här
const mapStateToProps = (state: any) => ({
  questions: state.question.list
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  onLoad: function() {
    setTimeout(() => {
      //props.history.push("/username");
    }, 4000);
  },

  async addScore(username: string, score: number) {
    if (!questionsModel.hasBeenSent()) await apiAddScore(username, score);
    questionsModel.setHasBeenSent(true);
    return;
  },
  toScoreBoard() {
    props.history.push("/scoreboard");
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore);
