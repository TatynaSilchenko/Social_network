import React from 'react';
import './App.css';

// import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialog/DialogsConteiner";
import LoginContainer from "./Components/Login/LoginConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersConteiner";
import UserContainer from "./Components/Users/UserContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReduser";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/redux_store";
import Navbar from "./Components/Nav/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Route, withRouter} from "react-router";

// interface IProps{
//     initialised: ()=>void,
//     location:any,
//     store:any
// }

class App extends React.Component {
    componentDidMount(){
        this.props.initializeApp()
    }

    render() {

if (!this.props.initialized) return <Preloader/>
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar friends={this.props.store}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/>
                    <Route exact path='/users' render={() => <UsersContainer/>}/>
                    <Route exact path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/users/:userId' render={() => <>
                        <UserContainer/></>}/>

                </div>
            </div>

        );

    }
}
const mapStateToProps=(state)=>(
    {
        initialized:state.app.initialized
    }
)
let AppContainer= compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})
) (App);

const MainApp=(props)=>{
    return <BrowserRouter>
        <Provider store={store}>
        <AppContainer store={store}/>
        </Provider>
    </BrowserRouter>
}
export default MainApp;
