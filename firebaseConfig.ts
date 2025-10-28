// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// ✅ Your Firebase configuration (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyA9Y1J9qtW292DlXpdRuUJ8M0l8QvNnT_4",
  authDomain: "nesto-user.firebaseapp.com",
  projectId: "nesto-user",
  storageBucket: "nesto-user.firebasestorage.app",
  messagingSenderId: "999955088407",
  appId: "1:999955088407:web:e91b016e3f87739d740852"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Persistent auth for React Native
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
