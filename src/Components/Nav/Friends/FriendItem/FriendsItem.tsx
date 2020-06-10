import React from 'react';
import s from '../Friends.module.css';

const FriendItem = (props: any) => {
    return (

        <div className={s.friend}>
            <img className={s.avatar} src={props.ava}/>
            <div> {props.name}</div>
        </div>
    )
}


export default FriendItem;