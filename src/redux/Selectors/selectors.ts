export const getIsAuthValue=(state:any)=>{
return state.auth.isAuth;
};

export const getReducerUserInfo=(state:any)=>{
    return state.auth;
};
export const getUserProfile=(state:any)=>{
    return state.userProfile.profile;
};

export const getProfileEditMode=(state:any)=>{
    return state.userProfile.editMode;
};

export const getUsersFromReduser=(state:any)=>{
    return  state.usersPage.users;
};

export const getStatusValue=(state:any)=>{
    return  state.usersPage.status;
};

export const getIsFetchingValue=(state:any)=>{
    return  state.usersPage.isFetching;
};

export const getPageSize=(state:any)=>{
    return state.usersPage.pageSize
};

export const getTotalUserCount=(state:any)=>{
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage=(state:any)=>{
    return state.usersPage.currentPage;
};

export const getFollowingInProgress=(state:any)=>{
    return state.usersPage.followingInProgress
}
export const getProfileFromId=(state:any)=>{
    return  state.profilePage.profile;
};
export const getUserStatusFromReducer=(state:any)=>{
    return  state.profilePage.status;
};
export const getDialogsPage=(state:any)=>{
    return state.dialogsPage;
}
export const getAuthUserName=(state:any)=>{
    return state.auth.userName
};
export const getProfilePosts=(state:any)=>{
    return state.profilePage.posts;
}
export const getAutorizedId=(state:any)=>{
    return state.auth.userInfo.userId;
}






