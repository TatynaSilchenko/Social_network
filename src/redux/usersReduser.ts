import {usersAPI} from "../dal/apiSdk";
import {statuses} from "./statuses";

const FOLLOW = 'SN/USERS/FOLLOW';
const UNFOLLOW = 'SN/USERS/UNFOLLOW';
const SET_USERS = 'SN/USERS/SETUSERS';
const SET_STATUS = 'SN/USERS/SET_STATUS';
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SN/USERS/SET_TOTAL_USERS_COUNT';
const TOGLE_IS_FETCHING = 'SN/USERS/TOGLE_IS_FETCHING';
const TOGLE_FOLLOWING_PROGRESS = 'SN/USERS/TOGLE_FOLLOWING_PROGRESS';


let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [0]
};
const UsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: state.status
            };
        case TOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId)
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })

            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        default:
            return state
    }
};
export const getUsers = (pageNumber = 1,pageSize=12) => (dispatch: Function) => {
    dispatch(togleIsFetching(true));
    usersAPI.getUsers(pageNumber, pageSize).then(data => {

        dispatch(togleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    })
};
export const followUser = (userId: number) => (dispatch: Function) => {
    dispatch(togleIsFetching(true));
    dispatch(togleFollowingProgress(true, userId));
    usersAPI.followUser(userId)
        .then((data) => {
            dispatch(togleIsFetching(false));
            (data.resultCode === 0) && dispatch(follow(userId));
            dispatch(togleFollowingProgress(false, userId));

        })
};
export const unfollowUser = (userId: number) => (dispatch: Function) => {
    dispatch(togleIsFetching(true));
    dispatch(togleFollowingProgress(true, userId));

    usersAPI.unfollowUser(userId)
        .then((data) => {
            dispatch(togleIsFetching(false));
            (data.resultCode === 0) && dispatch(unfollow(userId));
            dispatch(togleFollowingProgress(false, userId));
        })
};

export const follow = (userId: number) => ({type: FOLLOW, userId});
export const togleIsFetching = (isFetching: boolean) => ({type: TOGLE_IS_FETCHING, isFetching});
export const togleFollowingProgress = (isFetching: boolean, userId: number) => {
    return ({type: TOGLE_FOLLOWING_PROGRESS, isFetching, userId})
};
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId});
export const setUsers = (users: any) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setStatus = (status: string) => ({type: SET_STATUS, status});
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export default UsersReducer;
