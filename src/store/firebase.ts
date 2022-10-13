import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2TkI2MpNuP0mMPjEHJp1EQWloHpfXgqE",
  authDomain: "dummy-d1355.firebaseapp.com",
  databaseURL: "https://dummy-d1355.firebaseio.com",
  projectId: "dummy-d1355",
  storageBucket: "dummy-d1355.appspot.com",
  messagingSenderId: "674933834216",
  appId: "1:674933834216:web:21eeaef1179a8c5e6ce45d",
  measurementId: "G-H54EDWE6D2",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getFirestore(firebaseApp);
