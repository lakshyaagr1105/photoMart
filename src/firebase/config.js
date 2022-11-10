// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAzjNrarmcN4HvvWHRFsoe9CfluB2EwuBg",
  authDomain: "firegram-5994c.firebaseapp.com",
  projectId: "firegram-5994c",
  storageBucket: "firegram-5994c.appspot.com",
  messagingSenderId: "821418089728",
  appId: "1:821418089728:web:596347c4ece42cb34f27e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage , projectFirestore, timeStamp};