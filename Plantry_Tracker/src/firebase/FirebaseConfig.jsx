// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWr9t2hgN1fOrAI8O6GblUTyojQr1nXJs",
  authDomain: "kiran-splantrytrackerapp.firebaseapp.com",
  projectId: "kiran-splantrytrackerapp",
  storageBucket: "kiran-splantrytrackerapp.appspot.com",
  messagingSenderId: "576316141958",
  appId: "1:576316141958:web:aac270a7c2fac9620fbc07",
  measurementId: "G-KW8EHGJPNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;