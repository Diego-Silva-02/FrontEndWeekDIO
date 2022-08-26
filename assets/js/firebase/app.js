// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChqlQDfeZIh1fyyV2mnJRBBLh4AqyhZdM",
    authDomain: "semana-front-end-b1c8e.firebaseapp.com",
    projectId: "semana-front-end-b1c8e",
    storageBucket: "semana-front-end-b1c8e.appspot.com",
    messagingSenderId: "1095959755230",
    appId: "1:1095959755230:web:a22c911e5e70614f8cc54f"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app