import React, {Suspense} from "react";
import "./App.css";
import LoginContainer from "./Components/Login/LoginConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReduser";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/redux_store";
import Navbar from "./Components/Nav/Navbar";
import {HashRouter} from "react-router-dom";
import {Route, withRouter} from "react-router";

const DialogsContainer = React.lazy(() => import("./Components/Dialog/DialogsConteiner"))
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./Components/Users/UsersConteiner"))
// const UserContainer=React.lazy(()=>import("./Components/Users/UserContainer"))

// interface IProps{
//     initialised: ()=>void,
//     location:any,
//     store:any
// }

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) return <Preloader/>
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar friends={this.props.store}/>
                <div className={'app-wrapper-content'}>
                    <Suspense fallback={<Preloader/>}>
                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>}/>
                        <Route exact path='/users' render={() => <UsersContainer/>}/>
                        <Route exact path='/login' render={() => <LoginContainer/>}/>
                        {/*<Route path='/users/:userId' render={() => <>*/}
                        {/*    <UserContainer/></>}/>*/}
                    </Suspense>
                </div>
            </div>

        );

    }
}

const mapStateToProps = (state) => (
    {
        initialized: state.app.initialized
    }
)
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer store={store}/>
        </Provider>
    </HashRouter>
}
export default MainApp;
