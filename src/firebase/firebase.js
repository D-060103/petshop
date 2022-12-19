// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk6O5nwlm2IEufeVqgj_tZY4pIhykepmo",
  authDomain: "petshop-a4525.firebaseapp.com",
  projectId: "petshop-a4525",
  storageBucket: "petshop-a4525.appspot.com",
  messagingSenderId: "655438611894",
  appId: "1:655438611894:web:a6c270ba48f2a421482d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;