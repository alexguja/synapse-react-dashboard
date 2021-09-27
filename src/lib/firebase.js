import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  projectId: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  appId: `${process.env.REACT_APP_FIREBASE_API_KEY}`
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;