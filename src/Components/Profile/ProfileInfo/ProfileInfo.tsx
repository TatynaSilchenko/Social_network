import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css"
import ProfileStatusHook from "../Status/ProfileStatusHook";

interface IProps {
    profile: any,
    status:string,
    updateUserStatus:Function,
    isAuth:Function,
    userInfo:any
}

const ProfileInfo = (props: IProps) => {
    if (!props.profile) {
        return <div>
            <Preloader/>
        </div>
    }
    let {profile} = props;

    return (
        <div>
            <div>
                <img className={styles.backGroundImg}
                     src={'https://bankoboev.ru/storage/thumbnail/bankoboev.ru-263464.jpg'}/>
            </div>
            {(profile) ? <div className={styles.user}>

                    <div className={styles.descriptionBlock}>
                        <div className={styles.avatar}>
                            {(profile.photos.large)
                                ? <img src={profile.photos.large}/>
                                : <img
                                    src="https://user-images.githubusercontent.com/30195/34457818-8f7d8c76-ed82-11e7-8474-3825118a776d.png"/>}
                        </div>
                    </div>
                    {/*{(isOwner) && (!editMode) && <span className={styles.editButton} onClick={onEditClick}>Edit</span>}*/}
                    <ProfileStatusHook
                                   status={props.status} updateUserStatus={props.updateUserStatus} />

                    <h2 className={styles.nameUser}> {profile.fullName}</h2>
                    <div className={styles.aboutMe}>
                        <b>About Me:</b> {profile.aboutMe}
                    </div>
                    <div className={styles.contacts}>

                        {(!!profile.contacts) && Object.keys(profile.contacts).map((key, index) =>
                            <div key={index}><b>{key}:</b><span>{profile.contacts[key]}</span>
                            </div>)}
                    </div>

                    <div className={styles.lookingForAJob}>
                        <b>lookingForAJob:</b> {String(profile.lookingForAJob)}
                    </div>
                    <div className={styles.lookingForAJobDescription}>
                        <b>lookingForAJobDescription:</b> {profile.lookingForAJobDescription}
                    </div>
                </div>
                :
                <div><Preloader/></div>}

        </div>)
}


export default ProfileInfo;
