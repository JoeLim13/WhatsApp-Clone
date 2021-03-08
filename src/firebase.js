// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM5t-VDBNdW8K3ba21Lnn1a9FFEigCkz4",
  authDomain: "whatsapp-clone-44bb3.firebaseapp.com",
  projectId: "whatsapp-clone-44bb3",
  storageBucket: "whatsapp-clone-44bb3.appspot.com",
  messagingSenderId: "285110825157",
  appId: "1:285110825157:web:c650b397948146441840ac",
  measurementId: "G-ZBGFDJK701",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
