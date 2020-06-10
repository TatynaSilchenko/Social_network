import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from "./usersReduser";
import UserReducer from "./userReduser";
import { reducer as formReducer } from 'redux-form'
import StatusReducer from "./StatusReduser";
import AuthReducer from "./AuthReduser";
import thunk from "redux-thunk";
import appReducer from "./appReduser";



let combinedReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth:AuthReducer,
    usersPage:UsersReducer,
    userProfile:UserReducer,
    status:StatusReducer,
    form: formReducer,
    app:appReducer
});
//@ts-ignore
const composeEnhancer: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(combinedReducers,
        composeEnhancer(applyMiddleware(thunk)));


export default store;