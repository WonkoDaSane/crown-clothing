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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) {
          return;
      }

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if (!snapShot.exists) {
          const {displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName, 
                  email,
                  createdAt,
                  ...additionalData
              });
          } catch (error) {
              console.log('error creating user', error.message);
          }
      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;