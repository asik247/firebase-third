// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjcgY3uRQCfR6z8A7br8dGvg6KsXM3Cvg",
    authDomain: "fir-third-8ef47.firebaseapp.com",
    projectId: "fir-third-8ef47",
    storageBucket: "fir-third-8ef47.firebasestorage.app",
    messagingSenderId: "491358497100",
    appId: "1:491358497100:web:9d69005735e09feb1ac7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);