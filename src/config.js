// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs8K80O09NBoqMn80o3LK2krrIfFRwuGE",
  authDomain: "szaby-516b8.firebaseapp.com",
  databaseURL: "https://szaby-516b8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "szaby-516b8",
  storageBucket: "szaby-516b8.appspot.com",
  messagingSenderId: "62570315847",
  appId: "1:62570315847:web:b644494aff25ffa4157162",
  measurementId: "G-PZ7707S3HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Password for the private chat room
const privateRoomPassword = 'DamnTrainCJ!69'
