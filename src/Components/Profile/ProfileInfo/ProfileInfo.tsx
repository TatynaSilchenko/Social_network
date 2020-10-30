import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css"
import ProfileStatusHook from "../Status/ProfileStatusHook";
import ProfileDataForm from "../../Users/UserContactForm";


interface IProps {
    profile: any,
    status: string,
    updateUserStatus: Function,
    isAuth: Function,
    userInfo: any,
    isOwner: boolean,
    savePhoto: Function;
    saveProfile: Function;
}

const ProfileInfo = (props: IProps) => {

    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <div>
            <Preloader/>
        </div>
    }
    let {profile} = props;
    let defaultPhoto = "https://user-images.githubusercontent.com/30195/34457818-8f7d8c76-ed82-11e7-8474-3825118a776d.png";

    const onSavePhoto = (e: any) => {
        if (e.target.files.length > 0) {
            props.savePhoto(e.target.files[0]);
        }

    }
    const onSubmit = (formData: any) => {
      props.saveProfile(formData).then(()=>setEditMode(false));

    }
    return (
        <div>
            <div>
                <img className={styles.backGroundImg}
                     src={'https://bankoboev.ru/storage/thumbnail/bankoboev.ru-263464.jpg'}/>

            </div>
            {(profile.photos) ? <div className={styles.user}>
                    <div className={styles.descriptionBlock}>
                        <div className={styles.avatar}>
                            <img src={profile.photos.large
                            || defaultPhoto}/>
                            {props.isOwner && <input className={styles.changePhoto} type="file" onChange={onSavePhoto}/>}
                        </div>
                    </div>
                    <ProfileStatusHook
                        status={props.status} updateUserStatus={props.updateUserStatus}/>
                    <h2 className={styles.nameUser}> {profile.fullName}</h2>
                    {editMode
                        ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
                        : <ProfileData profile={profile} isOwner={props.isOwner}
                                       goToEditeMode={() => setEditMode(true)}/>
                    }

                </div>
                :
                <div><Preloader/></div>}

        </div>)
}

interface IData {
    profile: any,
    isOwner: boolean,
    goToEditeMode: any
}

const ProfileData = ({profile, isOwner, goToEditeMode}: IData) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditeMode}>Edit</button>
        </div>}
        <div className={styles.aboutMe}>
            <b>About Me:</b> {profile.aboutMe}
        </div>
        <div className={styles.contacts}>
            <b>Contacts</b>:
            {Object.keys(profile.contacts).map((key, index) =>
                <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>)
            }
        </div>

        <div className={styles.lookingForAJob}>
            <b>lookingForAJob:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div className={styles.lookingForAJobDescription}>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
        }
    </div>
}

interface IPropsContact {
    contactTitle: string,
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: IPropsContact) => {
    return <div className={styles.contact}><b>{contactTitle}</b>:{contactValue}</div>
}


export default ProfileInfo;
