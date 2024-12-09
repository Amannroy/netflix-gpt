// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeM6GEGlsgIEzb_HJ1eneBWatY4CZGV5Q",
  authDomain: "netflixgpt-4ff49.firebaseapp.com",
  projectId: "netflixgpt-4ff49",
  storageBucket: "netflixgpt-4ff49.firebasestorage.app",
  messagingSenderId: "272492148985",
  appId: "1:272492148985:web:82192bac8aa4e88453ca28",
  measurementId: "G-12FKR0X6ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();