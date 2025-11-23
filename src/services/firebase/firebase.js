import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyBk_0c_lP-2H8_YfJuHVPEylj6MRYij8GY",
  authDomain: "mealmile-application.firebaseapp.com",
  projectId: "mealmile-application",
  storageBucket: "mealmile-application.firebasestorage.app",
  messagingSenderId: "651018322768",
  appId: "1:651018322768:web:d1f5c39ec3857eea20a255",
  measurementId: "G-TBQ0Q6G7JP"
};

const app= initializeApp(firebaseConfig);
// export const auth=getAuth(app)
export const auth =initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});