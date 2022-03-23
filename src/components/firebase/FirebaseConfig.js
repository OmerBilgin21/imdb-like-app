import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhRvEPYBKAcZdnqWhcTVOtfYuqN_u83SQ",
    authDomain: "imdb-like-dev.firebaseapp.com",
    projectId: "imdb-like-dev",
    storageBucket: "imdb-like-dev.appspot.com",
    messagingSenderId: "1047259276673",
    appId: "1:1047259276673:web:5d21b3b093a769d6ad3480"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);