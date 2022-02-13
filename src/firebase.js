/*import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtvIPRQCQSwJAFP7MQnzFEFIn2KZhtaHI",
  authDomain: "cart-b9e1f.firebaseapp.com",
  projectId: "cart-b9e1f",
  storageBucket: "cart-b9e1f.appspot.com",
  messagingSenderId: "622675580146",
  appId: "1:622675580146:web:58fafc5490af66e6a72c6b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

