import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDDQHiTPo4vnE_tYvpgBMNMD-qSBSwgxkY",
    authDomain: "puc-desenvolvimento-web.firebaseapp.com",
    projectId: "puc-desenvolvimento-web",
    storageBucket: "puc-desenvolvimento-web.appspot.com",
    messagingSenderId: "869443315917",
    appId: "1:869443315917:web:85959d9d74fe35aaa56184"

};

if (!firebase.apps.legth) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
