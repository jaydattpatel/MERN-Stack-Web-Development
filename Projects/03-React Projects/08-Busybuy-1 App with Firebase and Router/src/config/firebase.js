// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBknMg7HB1a8KnHz5k_PjUSFCiajRCd138",
  authDomain: "testproj-77587.firebaseapp.com",
  databaseURL: "https://testproj-77587-default-rtdb.firebaseio.com",
  projectId: "testproj-77587",
  storageBucket: "testproj-77587.appspot.com",
  messagingSenderId: "696325799855",
  appId: "1:696325799855:web:5affdff3213d24f89ff95a",
  measurementId: "G-FYSFP7D4L8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export { db };
