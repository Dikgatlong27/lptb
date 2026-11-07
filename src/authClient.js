import { auth } from './Firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const subscribe = (callback) => onAuthStateChanged(auth, callback);

export async function signup(email, password, name) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  if (name?.trim()) {
    await updateProfile(credential.user, { displayName: name.trim() });
  }
  return credential;
}

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
