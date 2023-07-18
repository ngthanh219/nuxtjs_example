<template>
    <Profile />
</template>

<script>
    import Profile from '../components/profile/Profile.vue';

    export default {
        name: 'ProfilePage',
        layout: 'home',
        components: { 
            Profile
        },
        mounted() {
            if (!this.$store.state.auth.accessToken) {
                this.$router.push({path: '/' });
            }
        },
    }
</script>