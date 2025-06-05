
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQGna5-EyNIQIjF5iSkUtbVLrEuMioOJU",
  authDomain: "helpy-fc1e2.firebaseapp.com",
  projectId: "helpy-fc1e2",
  storageBucket: "helpy-fc1e2.firebasestorage.app",
  messagingSenderId: "258707989594",
  appId: "1:258707989594:web:96340e025b9f5abf896463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);