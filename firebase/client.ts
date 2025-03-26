import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIer5ZllwofoVqgpr-SI-zzthLoJ12jxE",
  authDomain: "mishiwise.firebaseapp.com",
  projectId: "mishiwise",
  storageBucket: "mishiwise.firebasestorage.app",
  messagingSenderId: "294935249102",
  appId: "1:294935249102:web:fc13e266da24b7f6bc109f",
  measurementId: "G-WXR6X3Q1N8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp()

export const auth = getAuth(app)

export const db = getFirestore(app)