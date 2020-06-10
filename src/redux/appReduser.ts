import {getAuthUserData} from "./AuthReduser";

const SET_INITIALIZED_SUCCESS = 'SN/AUTH/SET_INITIALIZED_SUCCESS';


let initialState = {
initialized:false
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state
    }
};

export const initializeApp = () => (dispatch: Function, getState: Function) => {
let promise=dispatch(getAuthUserData());
    promise.then(()=>dispatch(initializedSuccess()))

};


export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export default appReducer;
