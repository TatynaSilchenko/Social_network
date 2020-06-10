import React from 'react';
import './App.css';
import Navbar from "./Components/Nav/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialog/DialogsConteiner";
import LoginContainer from "./Components/Login/LoginConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersConteiner";
import UserContainer from "./Components/Users/UserContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReduser";
import Preloader from "./Components/common/Preloader/Preloader";

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
        // if (this.props.location.pathname === '/login') {
        //     return (
        //         <div className='app-wrapper'>
        //             <HeaderContainer/>
        //             <div className='app-wrapper-content'>
        //                 <Route path='/login' render={() => <LoginContainer/>}/>
        //             </div>
        //         </div>)
     // }
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
export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})
) (App);
