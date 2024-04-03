// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXGFpl1bskKIHDbmfMxRueXOjMHVRgwJQ",
  authDomain: "conceptiual-session-mohamilon.firebaseapp.com",
  projectId: "conceptiual-session-mohamilon",
  storageBucket: "conceptiual-session-mohamilon.appspot.com",
  messagingSenderId: "343669173675",
  appId: "1:343669173675:web:e470f2e8bea458102a76ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;