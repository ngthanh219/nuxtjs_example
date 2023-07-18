<template>
    <ListPost />
</template>

<script>
    import ListPost from '../components/post/ListPost.vue';

    export default {
        name: 'IndexPage',
        layout: 'home',
        components: {
            ListPost
        }
    }
</script>
