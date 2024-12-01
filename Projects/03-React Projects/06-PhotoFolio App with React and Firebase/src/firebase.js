import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvXcmjqkNfMS0UGvNrjDSK9P-IFUpe5vs",
  authDomain: "photofolio-23d04.firebaseapp.com",
  projectId: "photofolio-23d04",
  storageBucket: "photofolio-23d04.appspot.com",
  messagingSenderId: "358983786647",
  appId: "1:358983786647:web:2a119d209bb220782489d2",
  measurementId: "G-XD69QY5C3R",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
