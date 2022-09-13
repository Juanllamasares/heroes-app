import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: "AIzaSyCRnxXfSVWO2vGqL0EWz_UxUW_9H8K19jM",
    authDomain: "heroes-app-5e90b.firebaseapp.com",
    projectId: "heroes-app-5e90b",
    storageBucket: "heroes-app-5e90b.appspot.com",
    messagingSenderId: "643185378764",
    appId: "1:643185378764:web:451169c5947a0cfece0969"
  };
  

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );