import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBP_z9SAZIUd7Bi-XOcbyblSlsLJIfKFIo",
    authDomain: "leftoverz-3a3df.firebaseapp.com",
    databaseURL: "https://leftoverz-3a3df.firebaseio.com",
    projectId: "leftoverz-3a3df",
    storageBucket: "leftoverz-3a3df.appspot.com",
    messagingSenderId: "699342847840",
    appId: "1:699342847840:web:54d9bdd4d81c0195f1e805",
    measurementId: "G-VSB3D0QSEB"
  };

  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app();

export const Auth = firebase.auth();
export const FireStore = firebase.firestore();