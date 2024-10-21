// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Cg4G524NVHG26fPk2oJrkL6bn6n2iK8",
  authDomain: "kdu-transportation-service.firebaseapp.com",
  projectId: "kdu-transportation-service",
  storageBucket: "kdu-transportation-service.appspot.com",
  messagingSenderId: "766732878424",
  appId: "1:766732878424:web:5205ff029cd53ffebec02d",
  measurementId: "G-51MMV260BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestore = getFirestore(app);

// Initialize Analytics (if you need it)
if (typeof window !== 'undefined' && 'measurementId' in firebaseConfig) {
  const analytics = getAnalytics(app);
}
