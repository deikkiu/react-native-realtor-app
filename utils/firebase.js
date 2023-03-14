import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCadsh8KTDRXpfVj6eS3o5A52f_qRu28Lo",
  authDomain: "estateeasy-f1d26.firebaseapp.com",
  projectId: "estateeasy-f1d26",
  storageBucket: "estateeasy-f1d26.appspot.com",
  messagingSenderId: "47550711947",
  appId: "1:47550711947:web:fe0fd358b6b9ede17bac8e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const logout = () => {
  return signOut(auth);
}