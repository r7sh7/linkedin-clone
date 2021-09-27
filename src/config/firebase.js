import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOX9HAor3yyXyQUy0N2DVno24G3C3aoAU",
  authDomain: "linkedin-clone-a3cdf.firebaseapp.com",
  projectId: "linkedin-clone-a3cdf",
  storageBucket: "linkedin-clone-a3cdf.appspot.com",
  messagingSenderId: "775826916906",
  appId: "1:775826916906:web:bbb79ff433910c11f92553",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
