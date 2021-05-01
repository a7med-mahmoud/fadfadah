import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase
  .app()
  .functions(process.env.REACT_APP_FIREBASE_FUNCTIONS_REGION);
let messaging: firebase.messaging.Messaging | null = null;

if (firebase.messaging.isSupported()) {
  messaging = firebase.messaging();
}

if (process.env.NODE_ENV === 'development') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', 8080);
  functions.useEmulator('localhost', 5001);
}

auth.useDeviceLanguage();

db.enablePersistence({ synchronizeTabs: true });

export const { RecaptchaVerifier } = firebase.auth;
export { default as messages } from './firebase-messages';
export { auth, db, functions, storage, messaging };
