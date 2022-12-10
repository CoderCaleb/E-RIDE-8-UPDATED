import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDqXhf6IHqTgvwsYeXcSdgVJ9R5Xthkdps",
  authDomain: "e-ride-8-5eb1d.firebaseapp.com",
  projectId: "e-ride-8-5eb1d",
  storageBucket: "e-ride-8-5eb1d.appspot.com",
  messagingSenderId: "306333074846",
  appId: "1:306333074846:web:8b8bb61ec3f28ef16f428f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
