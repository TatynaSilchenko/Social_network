import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUser,
    getUsers, setCurrentPage,
     togleFollowingProgress,
    unfollowUser
} from "../../redux/usersReduser";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAythRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetchingValue,
    getPageSize,
    getStatusValue,
    getTotalUserCount,
    getUsersFromReduser
} from "../../redux/Selectors/selectors";

interface IProps {
    users:any[],
    getUsers:Function,
    isFetching:boolean,
    currentPage:number,
    pageSize:number,
    setCurrentPage:Function,
    followingInProgress:[],
    totalUsersCount:number,
    followUser:Function,
    unfollowUser:Function
}

class UsersContainer extends React.Component <IProps>{
    componentDidMount() {
        (!this.props.users.length) && this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPagesChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber)
    }
    render() {
        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Users {...this.props} onPagesChanged={this.onPagesChanged}/>
    </>
            }
}

let mapStateToProps = (state:any) => {

    return {
        users:getUsersFromReduser(state),
        status: getStatusValue(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetchingValue(state),
        followingInProgress:getFollowingInProgress(state)
    }
};
export default compose(
    connect(mapStateToProps,
    {followUser,unfollowUser,getUsers,setCurrentPage,togleFollowingProgress})
)(UsersContainer)

