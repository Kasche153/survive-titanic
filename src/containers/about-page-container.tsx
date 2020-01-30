import { connect } from "react-redux";
import { AboutPage } from "../pages/aboutpage/aboutpage";

/// funktionalitet kan läggas här
const mapStateToProps = (state: any) => ({
  username: state.user.username
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  onLoad: function() {
    setTimeout(() => {
      //props.history.push("/username");
    }, 4000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
