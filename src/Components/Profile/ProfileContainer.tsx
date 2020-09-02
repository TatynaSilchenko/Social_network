import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserInfo, getUserStatus, savePhoto, updateUserStatus} from "../../redux/profileReducer";
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
    autorizedId:any,
    savePhoto:Function

}

class ProfileContainer extends Component<IProps> {
    refresh(){
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
    componentDidMount(): void {
       this.refresh();
    }
    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any) {
        if ( this.props.match.params.userId!= prevProps.match.params.userId){
            this.refresh();
        }
    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId}
                     {...this.props} profile={this.props.profile}
            savePhoto={this.props.savePhoto}/>
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
    connect(mapStateToProps, {getUserInfo,getUserStatus,updateUserStatus,savePhoto})
)(ProfileContainer)
