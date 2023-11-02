import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDkcOZe1UoQ9v_eptnSU47JHjs-s-3Q1vY",
  authDomain: "pori-chat.firebaseapp.com",
  projectId: "pori-chat",
  storageBucket: "pori-chat.appspot.com",
  messagingSenderId: "621067943834",
  appId: "1:621067943834:web:d957553201f6bad9e50423"
}).auth();