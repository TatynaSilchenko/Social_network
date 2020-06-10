import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props: any) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.active}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.active}>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.active}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <a>
                    Settings
                </a>
            </div>
            <div className={s.friends}>
                <Friends friends={props.friends}/>
            </div>

        </nav>
    )

};
export default Navbar;