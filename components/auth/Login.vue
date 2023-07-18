<template>
    <section>
        <br>
        <h2>Login page</h2>
        <br>
        <form @submit="login">
            <input type="email" name="email" v-model="form.email" />
            <br>
            <br>

            <input type="password" name="password" v-model="form.password" />
            <br>
            <br>

            <button type="submit">Login</button>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }  
        },
        methods: {
            login(e) {
                e.preventDefault();
                this.$authentication.setLoadingLogin(true);

                this.$store.dispatch('login', this.form)
                .then((res) => {
                    this.$authentication.setAuth({
                        accessToken: res.data.access_token,
                        refreshToken: res.data.refresh_token
                    });
                    
                    this.$authentication.setLoadingLogin(false);
                    this.$router.push({path: '/' });
                })
                .catch((err) => {
                    alert(err.error.error_message);
                    this.$authentication.setLoadingLogin(false);
                })
            }
        }
    }
</script>