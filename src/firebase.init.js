// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey:process.env.REACT_APP_API_KEY,
//    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
//    projectId:process.env.REACT_APP_PROJECT_ID,
//    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
//    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
//    appId:process.env.REACT_APP_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)
// export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClHhHVxbJ_iDZkurAjfHE095AoXnERuXI",
  authDomain: "final-defense-authentication.firebaseapp.com",
  projectId: "final-defense-authentication",
  storageBucket: "final-defense-authentication.appspot.com",
  messagingSenderId: "758137130637",
  appId: "1:758137130637:web:ba87b0046f252644a65cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;