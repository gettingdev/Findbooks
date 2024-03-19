// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'
import { getDocFromCache, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEWEmW0X-eJG5Ns-XQ0h2d3Pci5Ye7KVg",
  authDomain: "dbook-848e1.firebaseapp.com",
  projectId: "dbook-848e1",
  storageBucket: "dbook-848e1.appspot.com",
  messagingSenderId: "77402209257",
  appId: "1:77402209257:web:0ccc1d511093247b8be978",
  measurementId: "G-6ETNYCRZLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({   
    prompt : "select_account "
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth)


export const db = getFirestore(app)


