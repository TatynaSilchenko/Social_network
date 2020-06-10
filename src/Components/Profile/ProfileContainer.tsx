import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserInfo, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {
    getAutorizedId,
    getIsAuthValue,
    getProfileFromId,
    getReducerUserInfo,
    getUserStatusFromReducer
} from "../../redux/Selectors/selectors";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAythRedirect";
import {compose} from "redux";

interface IProps extends RouteComponentProps<any> {
    getUserInfo: Function,
    getUserStatus:Function,
    updateUserStatus:Function,
    profile?: Object,
    match: any,
    status: string,
    isAuth:Function,
    userInfo:any,
    autorizedId:any
}

class ProfileContainer extends Component<IProps> {
    componentDidMount(): void {
        debugger
        let userIdFromUrl = this.props.match.params.userId;
        if (!userIdFromUrl) {
            userIdFromUrl = this.props.autorizedId
            if(!userIdFromUrl){
                // this.props.history.push('/login')
            }
        }
        this.props.getUserInfo(userIdFromUrl);
        this.props.getUserStatus(userIdFromUrl)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}

let mapStateToProps = (state: any) => (

    {
        profile: getProfileFromId(state),
        userInfo: getReducerUserInfo(state),
        status:getUserStatusFromReducer(state),
        isAuth:getIsAuthValue(state),
        autorizedId:getAutorizedId(state)
    })
;
export default compose (
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserInfo,getUserStatus,updateUserStatus})
)(ProfileContainer)
