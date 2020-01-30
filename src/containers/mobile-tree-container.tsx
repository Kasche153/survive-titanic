import { connect } from "react-redux";
import { MobileTree } from "pages/mobiletree/mobile-tree"
import { RouteChildrenProps } from "react-router";

 
const mapStateToProps = (state: any) => ({
  username: state.user.username,
  questions: state.question.list
});

const mapDispatchToProps = (dispatch: any, props: RouteChildrenProps) => ({
  goBackToQuestion(){
    props.history.push("/question"); 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileTree);
