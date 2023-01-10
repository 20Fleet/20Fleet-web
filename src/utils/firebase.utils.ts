import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
  UserCredential,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {
  doc,
  getDoc,
  getFirestore,
  QueryDocumentSnapshot,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAveFv3xxmlaSKbEShseixOij30X6BhJBE",
  authDomain: "fleet-82c46.firebaseapp.com",
  projectId: "fleet-82c46",
  storageBucket: "fleet-82c46.appspot.com",
  messagingSenderId: "766265810369",
  appId: "1:766265810369:web:559f57440ae80639322340",
  measurementId: "G-KTCNYVCMGX",
};

export interface UserData {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  investmentType: string | null;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export const db = getFirestore();

export const createUserProfileDocument = async (
  userAuth: User,
  additionalData = {}
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userRef);

  if (!userSnapShot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error: any) {
      console.log("error creating user", error.message);
    }
  }

  return userSnapShot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  if (!email || !password) throw new Error("Missing email or password");
  ;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    return error.message;
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
