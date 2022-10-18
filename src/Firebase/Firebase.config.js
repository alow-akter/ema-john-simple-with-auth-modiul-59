// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsgDv0xCHeFSwfRd6TeOmRCPg8klXIYP0",
    authDomain: "ema-john-simple-auth-f2f08.firebaseapp.com",
    projectId: "ema-john-simple-auth-f2f08",
    storageBucket: "ema-john-simple-auth-f2f08.appspot.com",
    messagingSenderId: "419334517203",
    appId: "1:419334517203:web:a23463912a3b08d9e97f26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 