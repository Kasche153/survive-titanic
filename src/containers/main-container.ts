import { connect } from "react-redux";
import { MainPage } from "../pages/main/main";
import { questionsModel } from "models/question-model-handler";

/// funktionalitet kan läggas här
const mapStateToProps = (state: any) => ({
  username: state.user.username
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  onLoad: function() {
    setTimeout(() => {
      //props.history.push("/username");
    }, 4000);
  },
  setUsername: function(username: string) {
    if (!username) return alert("Please select a username to continue!");

    dispatch({ type: "SET_USERNAME", payload: username });
    questionsModel.setUsername(username);
    props.history.push("/question");
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
