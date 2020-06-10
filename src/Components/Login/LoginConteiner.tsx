import {connect} from "react-redux";
import Login from "./Login";
import {getIsAuthValue, getReducerUserInfo} from "../../redux/Selectors/selectors";
import {compose} from "redux";
import {loginT} from "../../redux/AuthReduser";

let mapStateToProps = (state:any) => ({
    isAuth: getIsAuthValue(state),
    state: getReducerUserInfo(state)
});
export default compose(connect(mapStateToProps, {loginT})
)(Login);

