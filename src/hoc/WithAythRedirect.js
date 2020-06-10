import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {getIsAuthValue} from "../redux/Selectors/selectors";

let mapStateToProps=(state)=>{
    return{
        isAuth:getIsAuthValue(state)
    }
};

export let withAuthRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
};
