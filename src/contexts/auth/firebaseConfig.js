import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqVfE8Q5PrAE7PJoDYmgxsjyBwbwvm5Cs",
  authDomain: "neon-msg.firebaseapp.com",
  projectId: "neon-msg",
  storageBucket: "neon-msg.firebasestorage.app",
  messagingSenderId: "599748313938",
  appId: "1:599748313938:web:696f1e590299f054f9308b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
