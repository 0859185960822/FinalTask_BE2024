import { defineStore } from "pinia";
import { userService } from '../../helpers/authservice/user.service';
import router from '../../router/index'
import { useNotificationStore } from "./notification"

const user = JSON.parse(localStorage.getItem('user'));

export const useAuthFakeStore = defineStore("authFake", {
    state: () => ({
        status: user ? { loggeduser: true } : {},
        user: user || null
    }),
    actions: {
        login(email, password) {
            this.loginRequest(email)
            userService.login(email, password)
                .then(
                    (user) => {
                        this.loginSuccess(user)
                        router.push('/');
                    },
                    (error) => {
                        this.loginFailure()
                        const notificationStore = useNotificationStore(); 
                        notificationStore.error(error);
                    }
                );

        },
        logout() {
            userService.logout();
            this.status = {};
            this.user = null;
        },
        registeruser(user) {
            const notificationStore = useNotificationStore();
            this.registerRequest(user)
            userService.register(user)
                .then(
                    (user) => {
                        this.registerSuccess(user)
                        notificationStore.success('Registration successful'); 
                        router.push('/login');
                    },
                    (error) => {
                        this.registerFailure()
                        notificationStore.error(error);
                    }
                );
        },
        loginRequest(email) {
            this.status = { loggingIn: true }
            this.user = email
        },
        loginSuccess(user) {
            this.status = { loggeduser: true };
            this.user = user;
        },
        loginFailure() {
            this.status = {};
            this.user = null;
        },

        registerRequest() {
            this.status = { registering: true };
        },
        registerSuccess() {
            this.status = {};
        },
        registerFailure() {
            this.status = {};
        }
    },
})