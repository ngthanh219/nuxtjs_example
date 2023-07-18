<template>
    <div class="app">
        <Header />
            <div>
                <Nuxt />
            </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/layouts/Header.vue';
    import Footer from '../components/layouts/Footer.vue';

    export default {
        name: 'HomeLayout',
        components: {
            Header,
            Footer
        }
    }
</script>