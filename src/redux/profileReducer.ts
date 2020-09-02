import {togleIsFetching} from "./usersReduser";
import {profileAPI} from "../dal/apiSdk";


const SET_USER_PROFILE = 'SN/PROFILEPAGE/SET_USER_PROFILE ';
const SET_STATUS = 'SN/PROFILEPAGE/SET_STATUS ';
const ADD_POST = 'SN/PROFILEPAGE/ADD-POST';
const DELETE_POST = 'SN/PROFILEPAGE/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SN/PROFILEPAGE/SAVE_PHOTO_SUCCESS';

let initialState = {
    profile: {},
    status: '',
    posts: [
        {id: 1, message: 'Good night', likeCount: 123},
        {id: 2, message: 'This good idea', likeCount: 12},
        {id: 3, message: 'Second post', likeCount: 1},
        {id: 4, message: 'This my first post', likeCount: 118}
    ]
};
const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                posts: [{
                    id: 5,
                    message: action.postText,
                    likeCount: 0
                },
                    ...state.posts],
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state
    }
};

export const getUserInfo = (userId: number) => (dispatch: Function) => {
    dispatch(togleIsFetching(true));
    profileAPI.getProfile(userId)
        .then((data) => {
            dispatch(setUserProfile(data));
            dispatch(togleIsFetching(false));
        })
};
export const getUserStatus = (userId: number) => (dispatch: Function) => {
    // dispatch(togleIsFetching(true));
    profileAPI.getProfileStatus(userId)
        .then((data) => {
            dispatch(setStatus(data));
            // dispatch(togleIsFetching(false));
        })
};
export const updateUserStatus = (status: string) => (dispatch: Function) => {
    // dispatch(togleIsFetching(true));

    profileAPI.updateProfileStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            } else {
                alert(data.messages)
            }
            // dispatch(togleIsFetching(false));
        })
};
export const savePhoto = (photo: any) => async (dispatch: Function) => {
    const response = await profileAPI.savePhoto(photo);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }

};

export const setUserProfile = (profile: Object) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string) => ({type: SET_STATUS, status});
export const addPost = (postText: string) => ({type: ADD_POST, postText});
export const deletePost = (id: number) => ({type: DELETE_POST, id});
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos});
export default profileReducer;
