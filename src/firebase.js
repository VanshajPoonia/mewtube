import firebase from "firebase/app";

import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3EGlZcRc_XqWbLmYj5ogfKadfPjVN288",
  authDomain: "mewtube-op.firebaseapp.com",
  projectId: "mewtube-op",
  storageBucket: "mewtube-op.appspot.com",
  messagingSenderId: "327478350934",
  appId: "1:327478350934:web:ad9c94c3554f75f40a97f7",
  measurementId: "G-7H3KBDRJ08",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
