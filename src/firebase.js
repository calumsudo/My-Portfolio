// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "calum-siemer-portfolio.firebaseapp.com",
  projectId: "calum-siemer-portfolio",
  storageBucket: "calum-siemer-portfolio.appspot.com",
  messagingSenderId: "788562566190",
  appId: "1:788562566190:web:9ce0e5e73c303b101393bf",
  measurementId: "G-W18M7C3Y1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);