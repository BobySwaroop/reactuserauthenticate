
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwayPl8yws1DI3DvuofYMEAjXG4PB1GC4",
  authDomain: "userauthentication-34133.firebaseapp.com",
  projectId: "userauthentication-34133",
  storageBucket: "userauthentication-34133.appspot.com",
  messagingSenderId: "979851309393",
  appId: "1:979851309393:web:16f0d28acc4ea3eec72370",
  measurementId: "G-NXM29FFQ0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };