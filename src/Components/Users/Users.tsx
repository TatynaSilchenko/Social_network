import React from 'react';
import style from './users.module.css'
import {NavLink} from "react-router-dom";

interface IProps {
    users:any[],
    followingInProgress:[],
    totalUsersCount:number,
    pageSize:number,
    currentPage:number,
    onPagesChanged:Function,
    unfollowUser:Function,
    followUser:Function
}

let Users = (props: IProps) => {
    let {users,followingInProgress} = props;
    let pageCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: any[] = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let selectedPage = (p: any) => {
        if (props.currentPage === p) {
            return style.selectedPage
        }
    }
    return <div>

        <div>
            {pages.map((p: number) => {
                return <span className={selectedPage(p)} onClick={() => {
                    props.onPagesChanged(p)
                }}>{p} </span>
            })}
        </div>
        <div className={style.usersList}>
            {
                !users.length && <span>users not found</span>
            }
            {users.map((u: any) =>
                <div className={style.user} key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img
                        src={u.photos.small != null ? u.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbjDT4_86P3Ig4JwojvIDUwEbgw4bDS6QMq8O96XkIKiWAK8g'}
                        className={style.userPhoto}/>
                    </NavLink>
                </div>

                <div>
                    {u.followed
                        ? <button disabled={followingInProgress.some((id:number)=>id===u.id)} onClick={() => {
                            props.unfollowUser(u.id)
                        }}> Unfollow</button>

                        : <button disabled={followingInProgress.some((id:number)=>id===u.id)} onClick={() => {
                            props.followUser(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                      <div>
                   {u.name}
                </div>
                    <div>{u.status}</div>
                </span>
                        {/*<span>*/}
                        {/*    <div>{'u.location.city'}</div>*/}
                        {/*    <div>{'u.location.country'}</div>*/}
                        {/*</span>*/}
            </span>
                </div>)}


        </div>
    </div>
}
export default Users;