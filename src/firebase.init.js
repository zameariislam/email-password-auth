// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWUSJtI9o9iXway_J6UXupzE6NRPO_K-I",
    authDomain: "email-password-app-906ac.firebaseapp.com",
    projectId: "email-password-app-906ac",
    storageBucket: "email-password-app-906ac.appspot.com",
    messagingSenderId: "904006676764",
    appId: "1:904006676764:web:056b8d2548636d1226cad9",
    measurementId: "G-VE8JF2CQ5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app