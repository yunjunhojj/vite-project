// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuhaGfyn79iyiT4lmUyRb9PMyKVzOpjPo",
  authDomain: "time-tracker-950a4.firebaseapp.com",
  projectId: "time-tracker-950a4",
  storageBucket: "time-tracker-950a4.appspot.com",
  messagingSenderId: "526465382103",
  appId: "1:526465382103:web:78f957cd654878c44b6292",
  measurementId: "G-E46M51FFL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
