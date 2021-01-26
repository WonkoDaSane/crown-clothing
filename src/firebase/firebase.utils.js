import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDBGPP1B5jEM3NfPviypBLjGF57KKxjlGU",
    authDomain: "crown-db-a34ad.firebaseapp.com",
    projectId: "crown-db-a34ad",
    storageBucket: "crown-db-a34ad.appspot.com",
    messagingSenderId: "546229327939",
    appId: "1:546229327939:web:b6a3b2ed47cf482bc79cf6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;