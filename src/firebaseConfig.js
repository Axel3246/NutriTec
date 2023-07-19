import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQVeUtYhn4W4fWcUAQhpkmUGlfuG2ykDk",
  authDomain: "nutritec-40422.firebaseapp.com",
  projectId: "nutritec-40422",
  storageBucket: "nutritec-40422.appspot.com",
  messagingSenderId: "296035798207",
  appId: "1:296035798207:web:81d8613164ceb079c68a0a",
  measurementId: "G-YP756PJH08"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const database = getFirestore(app);
const storage = getStorage(app);
const auth = firebase.auth(); // Add this line to initialize the auth module

export { database, storage, auth };