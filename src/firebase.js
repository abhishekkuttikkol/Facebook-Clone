import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCPgzP9VxTJ8fCd2Lfilf4ouxkSchewnPA",
    authDomain: "facebook-mern-0015.firebaseapp.com",
    projectId: "facebook-mern-0015",
    storageBucket: "facebook-mern-0015.appspot.com",
    messagingSenderId: "197263612165",
    appId: "1:197263612165:web:0851daba1dbe677cd97f6c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider, firebaseApp }
export default db