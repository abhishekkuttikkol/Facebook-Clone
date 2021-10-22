import firebase from 'firebase'

const firebaseConfig = {
    
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider, firebaseApp }
export default db
