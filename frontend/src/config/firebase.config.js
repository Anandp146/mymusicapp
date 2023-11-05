import { getApp, getApps, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
// import { getAuth } from "firebase/auth"
const firebaseConfig = {

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,

    apiKey: "AIzaSyAKFKRv4PolmHKUwVeXytbrIQMeDcu0r5w",
    authDomain: "project-music-app-e422a.firebaseapp.com",
    projectId: "project-music-app-e422a",
    storageBucket: "project-music-app-e422a.appspot.com",
    messagingSenderId: "161981857170",
    appId: "1:161981857170:web:4ab46a4abcba5d3c8a554b"



};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
// const auth = getAuth(app);
export { app, storage };