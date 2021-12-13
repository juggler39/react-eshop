// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyByjLzqJjgmeMG-HflWIOApLBBNLnh240s',
    authDomain: 'e-shop-db2d8.firebaseapp.com',
    projectId: 'e-shop-db2d8',
    storageBucket: 'e-shop-db2d8.appspot.com',
    messagingSenderId: '184797329381',
    appId: '1:184797329381:web:4b4e5040fa526296af610c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    login_hint: 'select_account',
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutFirebase = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
}

