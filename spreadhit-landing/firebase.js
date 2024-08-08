// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAUIpKNLJja_PqHvqW1nMKQEt2n4xKvVVs",

  authDomain: "spread-hit-waitlist.firebaseapp.com",

  projectId: "spread-hit-waitlist",

  storageBucket: "spread-hit-waitlist.appspot.com",

  messagingSenderId: "19949610817",

  appId: "1:19949610817:web:e5caac5e10cf55894523c0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
