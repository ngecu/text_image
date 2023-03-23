// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzWCEMbUi9XyNlcyFbS_iNYl6wNikaLE",
  authDomain: "imagetextconverter-95b1d.firebaseapp.com",
  projectId: "imagetextconverter-95b1d",
  storageBucket: "imagetextconverter-95b1d.appspot.com",
  messagingSenderId: "406861927828",
  appId: "1:406861927828:web:616c1329f874c2b163eb81",
  measurementId: "G-LKGKDEL2DZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app);