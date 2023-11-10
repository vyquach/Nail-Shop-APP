import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAArqjOn6SV5AgQSni-p6CRKXJJSFnhGjA",
    authDomain: "nail-shop-app.firebaseapp.com",
    projectId: "nail-shop-app",
    storageBucket: "nail-shop-app.appspot.com",
    messagingSenderId: "590024058378",
    appId: "1:590024058378:web:604fb4c2ae171ca94161f3"
})

export const db = app.firestore();
export const auth = app.auth()
export default app