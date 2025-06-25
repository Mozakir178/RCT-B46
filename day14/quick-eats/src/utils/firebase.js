// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsFgWLgws4m0GUT44XI9e3AWxtFaRGqI",
  authDomain: "quick-eats-14573.firebaseapp.com",
  projectId: "quick-eats-14573",
  storageBucket: "quick-eats-14573.firebasestorage.app",
  messagingSenderId: "1018880306922",
  appId: "1:1018880306922:web:fb8e4d449d4af48b4d7193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) ;