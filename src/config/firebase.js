// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4rSGbdqpa9bu4AFghJbvBfOAhLmQbGlg",
  authDomain: "food-delivery-app-25e76.firebaseapp.com",
  projectId: "food-delivery-app-25e76",
  storageBucket: "food-delivery-app-25e76.appspot.com",
  messagingSenderId: "363773372843",
  appId: "1:363773372843:web:a5df7cbfba040ec8814aee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();