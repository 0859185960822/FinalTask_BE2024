import { defineStore } from "pinia";

// handle default value state access token
const accessToken = null;
const getAccessToken = () => {
    const token = localStorage.getItem('accessToken');
    return token ? localStorage.getItem('accessToken') : accessToken;
}

// handle default value state user data
const userDataDefault = () => ({
    id: null,
    name: null,
    username: null,
    avatar: null,
    created_at: null,
    updated_at: null,
    last_login: null,
});
const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : userDataDefault();
}

// handle default value state active role
const defaultActiveRole = () => ({
    role_id: null,
    role_name: null,
    role_description: null
});
const getActiveRole = () =>{
    const activeRole = localStorage.getItem('activeRole');
    return activeRole ? JSON.parse(activeRole) : defaultActiveRole();
}

// handle default value state user role
const defaultUserRole = [];
const getUserRole = () => {
    const userRole = localStorage.getItem('userRole');
    return userRole ? JSON.parse(userRole) : defaultUserRole;
};

// handle default value state user menu
const defaultUserMenu = [];
const getUserMenu = () => {
    const UserMenu = localStorage.getItem('userMenu');
    return UserMenu ? JSON.parse(UserMenu) : defaultUserMenu;
};

export const useAuthStore = defineStore("auth", {
    state: () => ({
        accessToken: getAccessToken(),
        userData: getUserData(),
        activeRole: getActiveRole(),
        userRole: getUserRole(),
        userMenu: getUserMenu()
    }),
    getters: {
        loggedIn() {
            if(this.accessToken){
                return true;
            } else {
                return false;
            }
        },
    },
    actions: {
        setAccessToken(accessToken){
            this.accessToken = accessToken;
            localStorage.setItem('accessToken', accessToken);
        },
        setUserData(userLogin){
            this.userData = {
                id: userLogin.user_id,
                name: userLogin.name,
                username: userLogin.username,
                avatar: userLogin.path_photo,
                created_at: userLogin.created_at,
                updated_at: userLogin.updated_at,
                last_login: userLogin.last_login,
            }
            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
        setActiveRole(dataActiveRole){
            this.activeRole = dataActiveRole;
            localStorage.setItem("activeRole", JSON.stringify(this.activeRole));
        },
        setUserRole(dataUserRole){
            this.userRole = dataUserRole;
            localStorage.setItem('userRole', JSON.stringify(this.userRole));
        },
        setUserMenu(dataUserMenu){
            this.userMenu = dataUserMenu;
            localStorage.setItem('userMenu', JSON.stringify(this.userMenu));
        }
    },
})