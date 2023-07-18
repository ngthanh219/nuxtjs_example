<template>
    <header>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <!-- <li v-if="$store.state.auth.accessToken">
                <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
            <li v-show="!$store.state.isLoadingLogin && !$store.state.auth.accessToken">
                <nuxt-link to="/login">Log in</nuxt-link>
            </li>
            <li v-show="!$store.state.isLoadingLogin && $store.state.auth.accessToken">
                <a @click="logout">Logout</a>
            </li> -->
            
            <li>
                <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/login">Log in</nuxt-link>
            </li>
            <li>
                <a @click="logout">Logout</a>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            logout(e) {
                e.preventDefault();
                
                this.$authentication.setLoadingLogin(true);
                this.$authentication.setAuth({
                    user: null,
                    accessToken: null,
                    refreshToken: null
                });
                
                this.$authentication.setLoadingLogin(false);
                this.$router.push({path: '/' });
            }
        }
    }
</script>
