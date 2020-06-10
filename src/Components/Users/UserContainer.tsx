import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import User from "./User";
import {
    getUserInfo,
    updateContact,
    setEditMode,
    setNewContact,
    setUserProfile
} from "../../redux/userReduser";
import {getIsAuthValue, getProfileEditMode, getReducerUserInfo, getUserProfile} from "../../redux/Selectors/selectors";

interface IProps extends RouteComponentProps<any>{
    getUserInfo:Function,
    match:any//??????
}

class UserContainer extends React.Component<IProps> {
    componentDidMount() {
        let userIdFromUrl = this.props.match.params.userId;
        this.props.getUserInfo(userIdFromUrl);
    }
    render() {
        return <User {...this.props}/>
    }
}

let mapStateToProps = (state:any) => {

    return {
        isAuth: getIsAuthValue(state),
        userInfo: getReducerUserInfo(state),
        profile: getUserProfile(state),
        editMode: getProfileEditMode(state)

    }
};
//connect(mapStateToProps, {getUserInfo,setEditMode,updateContact,setNewContact,setUserProfile})(UserContainer);

//export default UserContainer

export default withRouter(
    connect(mapStateToProps, {getUserInfo,setEditMode,updateContact,setNewContact,setUserProfile})
    (UserContainer)
);