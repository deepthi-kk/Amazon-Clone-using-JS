// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  
    apiKey: "Your_APIKey",
    authDomain: "visualailogin.firebaseapp.com",
    projectId: "visualailogin",
    storageBucket: "visualailogin.appspot.com",
    messagingSenderId: "dummy",
    appId: "dummy",
    measurementId: "G-CHS8X1X9E1"
  
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
