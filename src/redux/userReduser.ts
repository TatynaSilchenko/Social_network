import { instance} from "../dal/apiSdk";
import {togleIsFetching} from "./usersReduser";

const SET_USER_PROFILE = 'SN/USERS/SET_USER_PROFILE ';
const SET_EDIT_MODE = 'SN/USERS/SET_EDIT_MODE ';
const UPDATE_CONTACT = 'SN/USERS/UPDATE_CONTACT';


let initialState = {
    profile:{
        aboutMe:'About me',
        contacts: {
            skype: "skyp",
            vk: "vk.com",
            facebook: "facebook",
            icq: "icq",
            email: "email",
            googlePlus: "gogep",
            twitter: "twitter",
            instagram: "instagra",
            whatsApp: "watsap"
        },
        lookingForAJob:true,
        lookingForAJobDescription: true,
        fullName:'Tatyana'
    },
    editMode: false,

};

const UserReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            };
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: action.value
            };

        case UPDATE_CONTACT:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    contacts: {
                        ...state.profile.contacts,
                        [action.key]: action.value
                    }
                }
            };
        default:
            return state
    }
};
export const getUserInfo = (userIdFromUrl:number) => (dispatch:Function) => {
    dispatch(togleIsFetching(true));
    instance.get(`/profile/${userIdFromUrl}`)
        .then((response) => {
            dispatch(setUserProfile(response.data))
            dispatch(togleIsFetching(false));
        })

}
export const setNewContact = (profile:Object) => (dispatch:Function) => {
        // let {aboutMe, contacts, lookingForAJob,lookingForAJobDescription, fullName}=profile
    // let state = getState().userProfile;
    // dispatch(togleIsFetching(true));
    instance.put('profile',profile)
        .then((response) => {
            (response.data.resultCode===0)&&dispatch(setEditMode(false));

        })

}
export const setUserProfile = (profile:Object) => ({type: SET_USER_PROFILE, profile});
export const setEditMode = (value:boolean) => ({type: SET_EDIT_MODE, value});
export const updateContact = (value:string, key:string) => ({type: UPDATE_CONTACT, value, key});
export default UserReducer;