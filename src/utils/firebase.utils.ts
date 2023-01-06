import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAveFv3xxmlaSKbEShseixOij30X6BhJBE",
  authDomain: "fleet-82c46.firebaseapp.com",
  projectId: "fleet-82c46",
  storageBucket: "fleet-82c46.appspot.com",
  messagingSenderId: "766265810369",
  appId: "1:766265810369:web:559f57440ae80639322340",
  measurementId: "G-KTCNYVCMGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export const db = getFirestore();

export const createUserProfileDocument = async (
  userAuth: { uid?: any; displayName?: string; email?: string },
  additionalData = {}
) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error: any) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const createUserWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  if (email === "") {
    return "Please enter your email";
  }

  if (password === "") {
    return "Please enter your password";
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    return error.message;
  }
};

export const signInWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    return error.message;
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
