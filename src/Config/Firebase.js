// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBidgME-078xxksQQJ0xnLTqNp3vkub0u4",
  authDomain: "usual-e9ff7.firebaseapp.com",
  projectId: "usual-e9ff7",
  storageBucket: "usual-e9ff7.appspot.com",
  messagingSenderId: "543076173740",
  appId: "1:543076173740:web:8d9754990369852b7d9c09",
  measurementId: "G-1X53H99H5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {analytics, firestore}