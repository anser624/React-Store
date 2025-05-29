import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhy6yCiTdKAE4fdNksHDMo3IzZte7OB9k",
  authDomain: "react-store-ef9bf.firebaseapp.com",
  projectId: "react-store-ef9bf",
  storageBucket: "react-store-ef9bf.appspot.com", // .appspot.com wala hi chalega
  messagingSenderId: "436642099590",
  appId: "1:436642099590:web:8fd4cbbf2f946c0a537c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Ye line zaroori hai!