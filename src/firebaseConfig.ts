import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjpXXbH8n-vYr2wGO7jTRqEDwHxf2URS8",
  authDomain: "sample01-3132f.firebaseapp.com",
  databaseURL: "https://sample01-3132f.firebaseio.com",
  projectId: "sample01-3132f",
  storageBucket: "sample01-3132f.appspot.com",
  messagingSenderId: "506889284443",
  appId: "1:506889284443:web:60fa89c1bdf7d3126dc87e"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
