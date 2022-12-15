// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKzcjJU-AVy0eRGXydImC-xzrjz3FXAO8",
  authDomain: "js-coctails-team-1.firebaseapp.com",
  databaseURL: "https://js-coctails-team-1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "js-coctails-team-1",
  storageBucket: "js-coctails-team-1.appspot.com",
  messagingSenderId: "624341006577",
  appId: "1:624341006577:web:3e6d765aab4eee553d1150",
  measurementId: "G-QWCKC8FRX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const dbRefCheck = ref(db);
export {db, dbRefCheck}

