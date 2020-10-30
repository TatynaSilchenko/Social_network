import React from 'react';
import PropTypes from "prop-types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


interface IProps {
    profile:any,
    status: string,
    updateUserStatus:Function,
    isAuth:Function,
    userInfo:any,
    isOwner:boolean,
    savePhoto:Function,
    saveProfile:Function
}

const Profile = (props: IProps) => {
    return <div>
        <ProfileInfo {...props} profile={props.profile} isOwner={props.isOwner}
                     savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
        <MyPostsContainer/>
    </div>

};

Profile.propTypes = {
    profilePage: PropTypes.object,
};
export default Profile;
