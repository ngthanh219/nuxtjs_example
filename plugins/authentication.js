export default ({ store }, inject) => {
    inject('authentication', {
        setAuth(data) {
            data.user = (typeof data.user === 'undefined') ? (store.state.auth.user ? store.state.auth.user : null) : data.user;
            data.accessToken = (typeof data.accessToken === 'undefined') ? (store.state.auth.accessToken ? store.state.auth.accessToken : null) : data.accessToken;
            data.refreshToken = (typeof data.refreshToken === 'undefined') ? (store.state.auth.refreshToken ? store.state.auth.refreshToken : null) : data.refreshToken;

            store.commit('setAuth', data);
        },

        setLoadingLogin(isBool) {
            store.commit('setLoadingLogin', isBool);
        }
    })
}
