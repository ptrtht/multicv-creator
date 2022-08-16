import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as auth from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAi88jnUZ7Fgnqb4XGBzx8Fk1T7aOIzay8",
    authDomain: "multi-cv-writer.firebaseapp.com",
    projectId: "multi-cv-writer",
    storageBucket: "multi-cv-writer.appspot.com",
    messagingSenderId: "1080741222566",
    appId: "1:1080741222566:web:3cc964c566679ff06efc67",
    measurementId: "G-PQKLLH82DD"
};


export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const googleProvider = new auth.GoogleAuthProvider();