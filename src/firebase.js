// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  
    apiKey: "AIzaSyCGIYqITn8fMnqKmdo9cVuf1JoJ7crbi4U",
    authDomain: "visualailogin.firebaseapp.com",
    projectId: "visualailogin",
    storageBucket: "visualailogin.appspot.com",
    messagingSenderId: "884762503652",
    appId: "1:884762503652:web:661c00ce8b9a9a9dee3ff1",
    measurementId: "G-CHS8X1X9E1"
  
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};