import React from 'react';
import s from './Friends.module.css';

const FriendItem = (props: any) => {
    return (

        <div className={s.friend}>
            <img className={s.avatar}
                 src={'http://s.gama-gama.ru/userupload/138/2c4bb3089f7905628b272dc1b855e83c.jpg'}/>
            <div> Irina</div>
        </div>
    )
}
const Friends = (props: any) => {
    return (<div className={s.friends}>
            <h4> Friends</h4>
            <div className={s.items}>
                <div className={s.friend}>
                    <img className={s.avatar}
                         src={'http://s.gama-gama.ru/userupload/138/2c4bb3089f7905628b272dc1b855e83c.jpg'}/>
                    <div> Irina</div>
                </div>
                <div className={s.friend}>
                    <img className={s.avatar}
                         src={'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'}/>
                    <div> Nata</div>
                </div>
                <div className={s.friend}>
                    <img className={s.avatar}
                         src={'https://pixelbox.ru/wp-content/uploads/2018/02/spiderman_steam_avatar.jpg'}/>
                    <div> Stas</div>
                </div>
            </div>
        </div>


    )

}
export default Friends;