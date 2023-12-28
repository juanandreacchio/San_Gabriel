// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChWoC_Fd669iQvafIZc9VM9r7wLFtufic",
  authDomain: "san-gabriel-5cb61.firebaseapp.com",
  projectId: "san-gabriel-5cb61",
  storageBucket: "san-gabriel-5cb61.appspot.com",
  messagingSenderId: "634838138524",
  appId: "1:634838138524:web:814820097a31d5d5b0b759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
