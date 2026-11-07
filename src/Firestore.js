import { getFirestore } from 'firebase/firestore';
import app from './Firebase';

// Database code is loaded with account and quotation pages, not the public homepage.
export const db = getFirestore(app);
