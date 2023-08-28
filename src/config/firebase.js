// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJQC-U6bIcUQeJw94mPoxh0fjjQfeHtfE",
  authDomain: "redesocial-745ae.firebaseapp.com",
  projectId: "redesocial-745ae",
  storageBucket: "redesocial-745ae.appspot.com",
  messagingSenderId: "517045806420",
  appId: "1:517045806420:web:7e962a2852cb898d6154c1",
  measurementId: "G-3R6SFN8XE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;