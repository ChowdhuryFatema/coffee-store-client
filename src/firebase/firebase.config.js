// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAORKdqMqqhULhmkASB0LKzj__ZLg8oStQ",
  authDomain: "coffee-store-63add.firebaseapp.com",
  projectId: "coffee-store-63add",
  storageBucket: "coffee-store-63add.appspot.com",
  messagingSenderId: "876815973650",
  appId: "1:876815973650:web:afc43d8ea5105f006bc7cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
