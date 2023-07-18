<template>
    <section>
        <br>
        <h2>This is my profile</h2>
    </section>
</template>

<script>
    export default {
        name: 'Profile',
        mounted() {
            if (!this.$store.state.auth.accessToken) {
                console.log('Not authentication');
            }
        }
    }
</script>
