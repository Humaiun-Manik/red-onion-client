// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

/* apiKey: "AIzaSyAPkLxed5OCNoI4XZEm1CkxH_zCES30CuE",
  authDomain: "red-onion-52f5b.firebaseapp.com",
  projectId: "red-onion-52f5b",
  storageBucket: "red-onion-52f5b.appspot.com",
  messagingSenderId: "862213713218",
  appId: "1:862213713218:web:6808d013563ced95d12cdb", */
