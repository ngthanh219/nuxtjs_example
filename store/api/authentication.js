import requestAPI from "./index";

let authentication = {
    login({state}, formRequest) {
        return requestAPI({
            method: 'post',
            route: 'auth/login',
            formRequest: formRequest
        });
    },

    register({state}, formRequest) {
        return requestAPI({
            method: 'post',
            route: 'auth/register',
            formRequest: formRequest
        });
    },

    logout({state}, formRequest) {
        return requestAPI({
            method: 'post',
            route: 'auth/logout',
            formRequest: formRequest,
            accessToken: state.auth.accessToken
        });
    },

    sendVerificationCode({state}, formRequest) {
        return requestAPI({
            method: 'post',
            route: 'auth/send-verification-code',
            formRequest: formRequest
        });
    },
}

export default authentication;
