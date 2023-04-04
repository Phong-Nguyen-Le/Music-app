import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkZCVv2UfuirZ9htBjHPoHIqiliZ0Awyk",
  authDomain: "music-store-c1338.firebaseapp.com",
  projectId: "music-store-c1338",
  storageBucket: "music-store-c1338.appspot.com",
  messagingSenderId: "565721255620",
  appId: "1:565721255620:web:4754431ae9d2e2f88c8391",
  measurementId: "G-TBCT3DDPHP"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = app.auth()
const db = getFirestore(app)

export {db, auth}

export default firebase