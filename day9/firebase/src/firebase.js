 import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth";
//  import {getFireStore} from "firebase/firestore" ;
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyC36bpxcA6pinYLcxkuEETVBEorD0C3oQQ",
    authDomain: "fir-auth-99725.firebaseapp.com",
    projectId: "fir-auth-99725",
    storageBucket: "fir-auth-99725.firebasestorage.app",
    messagingSenderId: "784467985876",
    appId: "1:784467985876:web:d0ae36d7184b867ee3c241"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // export const db = getFireStore(app) ;

    export const auth = getAuth(app) ;

