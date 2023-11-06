// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf4GL-6whO2LDALbeouCfvCShwKNaTwwM",
  authDomain: "house-marketplace-app-d6e0c.firebaseapp.com",
  projectId: "house-marketplace-app-d6e0c",
  storageBucket: "house-marketplace-app-d6e0c.appspot.com",
  messagingSenderId: "964389083432",
  appId: "1:964389083432:web:0961d4d9011c965fc7981d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
