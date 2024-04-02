// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPCPWL9DXanOAl8MV6Wn5nMe-5G2CU-U0",
  authDomain: "auth-moha-milon-92749.firebaseapp.com",
  projectId: "auth-moha-milon-92749",
  storageBucket: "auth-moha-milon-92749.appspot.com",
  messagingSenderId: "236903771592",
  appId: "1:236903771592:web:cd166063861f6337a324fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth ;