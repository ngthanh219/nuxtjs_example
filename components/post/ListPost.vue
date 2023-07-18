<template>
    <section>
        <br>
        <h2>This is page</h2>
    </section>
</template>

<script>
    import firebase from '~/plugins/firebase.js';
    import { getDatabase, ref, onValue } from "firebase/database";

    // const db = firebase.firestore();
    // const settings = { timestampsInSnapshots: true }
    // db.settings(settings);

    export default {
        name: 'ListPost',
        data() {
            return {
                // ref: firebase
            }
        },
        mounted() {
            var starCountRef = ref(getDatabase(), 'chat_test');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                
                console.log(data);
            });
        }
    }
</script>
