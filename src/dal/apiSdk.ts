import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'db26107a-a86c-4eaf-937e-642d89d695c5'}
});

export const usersAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`,)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then((response) => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`,)
            .then((response) => response.data)
    },
};
export const profileAPI = {
    getProfile(userIdFromUrl: number) {
        return instance.get(`profile/${userIdFromUrl}`)
            .then((response) => response.data)
    },
    getProfileStatus(userId: number) {
        return instance.get(`/profile/status/` + userId)
            .then((response) => response.data)
    },
    updateProfileStatus(status: string) {
        return instance.put(`/profile/status`, {status})
            .then((response) => response.data)
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put("/profile/photo", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    saveProfile(profile:any) {
        return instance.put('profile', profile)
            .then((response) => response.data)
    }

}

export const authAPI = {
    postLogin(email: string, password: string, rememberMe: boolean = false, captcha: any) {
        return instance.post('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        }).then((response) => response.data)
    },
    authMe() {
        return instance.get('auth/me')
            .then((response) => response.data)
    },
    logOut() {
        return instance.post('auth/logout')
            .then((response) => response.data)
    }
}
export  const securityAPI={
    getCaptcha() {
        return instance.get('security/get-captcha-url')
            .then((response) => response.data)
    }
}
