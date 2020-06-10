import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

export interface Ilogin {
    isAuth: boolean,
    userName: string,
    logOut: Function

}

const Header = ({isAuth, userName, logOut}: Ilogin) => {

    let onLogOutClick = () => {
        logOut();

    };
    return <>
        <header className={s.header}>

            <img className={s.logo} src={'https://www.logogenie.net/download/preview/medium/3800412'} alt={'logo'}/>
            <div className={s.loginBlock}>
                {isAuth ? <><>{userName}</>
                        <div onClick={onLogOutClick}>Log out</div>
                    </>
                    :
                    <><NavLink to='/login'>Sign in</NavLink></>

                }
            </div>

        </header>
    </>

};
export default Header;