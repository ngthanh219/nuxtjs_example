import authentication from './api/authentication';

let actions = {
    login: authentication.login,
    register: authentication.register,
    sendVerificationCode: authentication.sendVerificationCode,
    logout: authentication.logout
}

export default actions;
