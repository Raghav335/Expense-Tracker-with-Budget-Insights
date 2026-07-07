import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWEQRnyJ0cnNleQ3IYpdbu-dVQ5FTEYGk",
  authDomain: "expense-tracker-3d50e.firebaseapp.com",
  projectId: "expense-tracker-3d50e",
  storageBucket: "expense-tracker-3d50e.firebasestorage.app",
  messagingSenderId: "970106898644",
  appId: "1:970106898644:web:ec655cbd4a091c47441341"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;