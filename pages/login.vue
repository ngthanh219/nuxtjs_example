<template>
    <Login />
</template>

<script>
    import Login from '../components/auth/Login.vue';

    export default {
        name: 'LoginPage',
        layout: 'home',
        components: { 
            Login
        },
        mounted() {
            if (this.$store.state.auth.accessToken) {
                this.$router.push({path: '/' });
            }
        },
    }
</script>