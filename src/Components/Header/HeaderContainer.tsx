import React,{Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../../redux/AuthReduser";
import {getAuthUserName, getIsAuthValue} from "../../redux/Selectors/selectors";

 interface IProps{
     getAuthUserData: Function,
     isAuth:boolean,
     logOut: Function,
     userName:string
 }

 class HeaderContainer extends Component <IProps>{

     render() {
       return <Header {...this.props}/>
    }
}
let mapStateToProps=(state:any)=>{
    return{
        isAuth:getIsAuthValue(state),
        userName:getAuthUserName(state)
    }
    }
export default connect(mapStateToProps,{getAuthUserData,logOut})(HeaderContainer)
