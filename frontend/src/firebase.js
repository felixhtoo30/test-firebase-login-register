// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXdoQEYeuvzuU6TazXMgsNJacU7n5Z73o",
  authDomain: "test-firebase-login-regi-2a38e.firebaseapp.com",
  projectId: "test-firebase-login-regi-2a38e",
  storageBucket: "test-firebase-login-regi-2a38e.appspot.com",
  messagingSenderId: "486680641666",
  appId: "1:486680641666:web:43641441a26acca9f5f49b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };