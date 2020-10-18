import firebase from 'firebase'; 


const firebaseConfig = {
    apiKey: "AIzaSyBCJiSLU2HTMWM2838vMcBK11hRDk1XYXA",
    authDomain: "discord-clone-4c7b3.firebaseapp.com",
    databaseURL: "https://discord-clone-4c7b3.firebaseio.com",
    projectId: "discord-clone-4c7b3",
    storageBucket: "discord-clone-4c7b3.appspot.com",
    messagingSenderId: "412877180679",
    appId: "1:412877180679:web:bfbb636d98e44488f1bfa2",
    measurementId: "G-V5ZGR8HZQ5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;