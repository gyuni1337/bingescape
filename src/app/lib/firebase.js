
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  
    apiKey: "AIzaSyBvcY2OWIMcBWtBMHtOQWMHFreQ1qxQ9VQ",
  
    authDomain: "bingespace-d40bd.firebaseapp.com",
  
    projectId: "bingespace-d40bd",
  
    storageBucket: "bingespace-d40bd.appspot.com",
  
    messagingSenderId: "193848599389",
  
    appId: "1:193848599389:web:92fc9c63cb76cca5dafeb4",
  
    measurementId: "G-EK32V04Z5V"
  
  };

// const firebaseConfig = JSON.parse(
//     process?.env?.FIREBASE_CONFIG ?? '{}',
// );

let analytics; let firestore; let auth;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // console.log(app);
  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  firestore = getFirestore();
  auth = getAuth();
  // console.log(firestore);
}

export {analytics, firestore, auth};