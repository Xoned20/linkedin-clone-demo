import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
  const firebaseConfig = {
    apiKey: "AIzaSyCuZcDmL7SgQQhVnGrZt5vLL3m3k3cP9MM",
    authDomain: "linkedin-clone-demo-32c1c.firebaseapp.com",
    projectId: "linkedin-clone-demo-32c1c",
    storageBucket: "linkedin-clone-demo-32c1c.appspot.com",
    messagingSenderId: "540134573222",
    appId: "1:540134573222:web:4c33e807a60e1ab49ea067"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };