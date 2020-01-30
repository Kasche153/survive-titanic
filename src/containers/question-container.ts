import { connect } from "react-redux";
import { Questions } from "pages/question/question-page";

const mapStateToProps = (state: any) => ({
  username: state.user.username,
  questions: state.question.list
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  addQuestion: (question: any) => {
    dispatch({ type: "ADD_QUESTION", payload: question });
    if (question.final) {
      props.history.push("/score");
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
