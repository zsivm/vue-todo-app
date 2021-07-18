// import { onUnmounted } from '@vue/runtime-core';
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDDBMiEYOhWQwDuP2pmyL_kJWMUJs3-gDg",
    authDomain: "vue-todo-app-f5277.firebaseapp.com",
    projectId: "vue-todo-app-f5277",
    storageBucket: "vue-todo-app-f5277.appspot.com",
    messagingSenderId: "690965396081",
    appId: "1:690965396081:web:336ac2e0533abd480a39d0"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
// const usersCollection = db.collection('users');

// export const createUser = user => {
//     return usersCollection.add(user);
// };

// export const getUser = async id => {
//     const user = await usersCollection.doc(id).get();
//     return user.exists ? user.data() : null;
// };

// export const updateUser = (id, user) => {
//     return usersCollection.doc(id).update(user);
// };

// export const deleteUser = id => {
//     return usersCollection.doc(id).delete();
// };

// export const useLoadUsers = () => {
//     const users = ref([]);
//     const close = usersCollection.onSnapshot(snapshot => {
//         users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     });
//     onUnmounted(close);
//     return users;
// };