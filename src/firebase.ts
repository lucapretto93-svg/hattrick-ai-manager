import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 authDomain: 'hattrick-ai-manager.firebaseapp.com',
 projectId: 'hattrick-ai-manager',
 storageBucket: 'hattrick-ai-manager.firebasestorage.app',
 messagingSenderId: '877156781355',
 appId: '1:877156781355:web:6f2f45a37ba30709a0896e'
};
export const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const googleProvider=new GoogleAuthProvider();