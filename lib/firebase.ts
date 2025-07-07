import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABPkDQGLvMNL5YiZBcT4KjXBb8xUJzI30",
  authDomain: "my-project-f739d.firebaseapp.com",
  projectId: "my-project-f739d",
  storageBucket: "my-project-f739d.appspot.com", // fixed typo: was "firebasestorage.app"
  messagingSenderId: "993887471257",
  appId: "1:993887471257:web:bc3fa98363a62a79099a08",
  measurementId: "G-5PWFBV7FPW",
};
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);