import {authAPI, securityAPI} from "../dal/apiSdk";
import {statuses} from "./statuses";
import {stopSubmit} from "redux-form";

const SET_IS_AUTH = 'SN/AUTH/SET_IS_AUTH';
const SET_USER_INFO = 'SN/AUTH/SET_USER_INFO';
const SET_STATUS = 'SN/AUTH/SET_STATUS';
const SET_MESSAGE = 'SN/AUTH/SET_MESSAGE';
const CHANGE_iNPUT_VALUE = 'SN/AUTH/CHANGE_iNPUT_VALUE';


let initialState = {
    status: statuses.NOT_INITIALIZED,
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        email: null
    },
    captchaRequired: false,
    captchaUrl: null,
    captchaValue: null, //if null then captcha is not requiried
    message: ''
};

const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.value
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo:{...state.userInfo,...action.payload}

            };
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        case CHANGE_iNPUT_VALUE:
            return {
                ...state,
                [action.propertyName]: action.propertyValye
            };
        default:
            return state
    }
};

export const getAuthUserData = () => (dispatch: Function, getState: Function) => {
   return authAPI.authMe()
        .then(data => {
            if (!data.resultCode) {
                dispatch(setIsAuth(true));
                dispatch(setUserInfo(data.data.id, data.data.login, data.data.email,true))

            }
        })
};

export const loginT = (email: string, password: string, rememberMe = false, captcha = null) => (dispatch: Function) => {
    dispatch(setStatus(statuses.IN_PROGRESS));
    authAPI.postLogin(email, password, rememberMe, captcha)
        .then(data => {

            switch (data.resultCode) {
                case 0:
                    dispatch(setStatus(statuses.SUCCESS));
                    dispatch(setIsAuth(true));
                    dispatch(getAuthUserData());
                    break;
                case 1:
                    dispatch(setStatus(statuses.ERROR));
                    let message=data.messages.length>0?data.messages[0]:'Some errror';
                    dispatch(setStatus(statuses.ERROR));
                    dispatch(stopSubmit('login-form',{_error:message}));
                   break;
                case 10:
                    dispatch(setStatus(statuses.ERROR));
                    dispatch(setMessage(data.messages[0]));
                    dispatch(changeInputValue('captchaRequired', true));
                    dispatch(getCaptchaUrl())
            }

        })
};
export const getCaptchaUrl=()=>async (dispatch: Function)=>{
    securityAPI.getCaptcha()
        .then(data => {
            dispatch(changeInputValue('captchaUrl', data.url))
        })
}

export const logOut = () => (dispatch: Function) => {
    authAPI.logOut()
        .then(data => {
            dispatch(setIsAuth(false));
            dispatch(setUserInfo(null, null, null,false))
        })
};
export const setStatus = (status:string) => ({type: SET_STATUS, status});
export const setMessage = (message:string) => ({type: SET_MESSAGE, message});
export const changeInputValue = (propertyName:string, propertyValye:any) => ({
    type: CHANGE_iNPUT_VALUE,
    propertyName,
    propertyValye
});
export const setIsAuth = (value: boolean) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId: any, userName: any, email: any, isAuth:boolean) => ({
    type: SET_USER_INFO,
    payload: {userId, userName, email,isAuth}
});
export default AuthReducer;
