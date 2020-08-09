import firebase from "firebase";

const DB_CONFIG = {
  apiKey: "AIzaSyBsXP1sLxcXQDGjBJIL-8nkLacqFAmnZ-0",
  authDomain: "badgeusers.firebaseapp.com",
  databaseURL: "https://badgeusers.firebaseio.com",
  projectId: "badgeusers",
  storageBucket: "badgeusers.appspot.com",
  messagingSenderId: "450021519231",
  appId: "1:450021519231:web:eefcdd3bf15a02ec13f44a",
  measurementId: "G-C99S4YKMGB"
};

firebase.initializeApp(DB_CONFIG);
const db = firebase
  .database()
  .ref()
  .child("badges");
export default db;
