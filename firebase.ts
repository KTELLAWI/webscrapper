import { initializeApp, getApps, getApp, } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC75UWp0jl-KENqTahcmeZoBeoAbxzjHT0",
    authDomain: "brightdata-2e86f.firebaseapp.com",
    projectId: "brightdata-2e86f",
    storageBucket: "brightdata-2e86f.appspot.com",
    messagingSenderId: "515231724436",
    appId: "1:515231724436:web:30299c22e1ce3cb5fa5581"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};