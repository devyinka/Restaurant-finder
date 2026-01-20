import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyAhpanVmvKv4nA4Zgkf4DTvDK7zAwQ0zXI",
  authDomain: "restaurant-checker-4d207.firebaseapp.com",
  projectId: "restaurant-checker-4d207",
  storageBucket: "restaurant-checker-4d207.firebasestorage.app",
  messagingSenderId: "730192200723",
  appId: "1:730192200723:web:d0e291ea44809dcdbc6be6",
  measurementId: "G-6NC813536N",
};

const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
