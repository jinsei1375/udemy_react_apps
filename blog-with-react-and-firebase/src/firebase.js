import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJlfOtW7BF-wmFlfXr2DZBXsXUQIR1gLo",
  authDomain: "blog-ee0bb.firebaseapp.com",
  projectId: "blog-ee0bb",
  storageBucket: "blog-ee0bb.appspot.com",
  messagingSenderId: "24145949848",
  appId: "1:24145949848:web:4e15bd859fbe6399834ced"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };