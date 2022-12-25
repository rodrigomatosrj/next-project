// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFRQFHjuv1jvzuPjNPR98CuIvrOXB4ncc",
  authDomain: "nextjs-project-518dd.firebaseapp.com",
  projectId: "nextjs-project-518dd",
  storageBucket: "nextjs-project-518dd.appspot.com",
  messagingSenderId: "873103979985",
  appId: "1:873103979985:web:0ad15ce9fa1f159a061cf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
