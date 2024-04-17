import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const doSignIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};
