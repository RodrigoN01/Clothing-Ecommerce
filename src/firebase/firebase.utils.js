import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCJsCmcFGiwRLzdWjFu_BF0UKApunTy1zk',
  authDomain: 'crwn-db-675bd.firebaseapp.com',
  databaseURL: 'https://crwn-db-675bd.firebaseio.com',
  projectId: 'crwn-db-675bd',
  storageBucket: 'crwn-db-675bd.appspot.com',
  messagingSenderId: '698600294251',
  appId: '1:698600294251:web:cc6e4f6039f95e7c226e2e',
  measurementId: 'G-KW13NT5H8M',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
