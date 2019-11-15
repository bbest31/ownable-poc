import Firebase from 'firebase';
import config from './config';

const firebaseApp = Firebase.initializeApp(config);

const db = firebaseApp.firestore();
const analytics = firebaseApp.analytics();

export { db, analytics };