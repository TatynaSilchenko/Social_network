
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAythRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/Selectors/selectors";
import {sendMessage} from "../../redux/dialogsReducer";

const mapStateToProps = (state:any) => {
    return {
        dialogsPage: getDialogsPage(state)
    }
};
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {sendMessage})
)(Dialogs);
// export default withAuthRedirect(connect(mapStateToProps, {updateNewMessageBody,sendMessage})(Dialogs));
