// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import  Constants  from 'expo-constants';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:Constants.expoConfig.extra.firebase.apiKey,
    authDomain:Constants.expoConfig.extra.firebase.authDomain,
    projectId:Constants.expoConfig.extra.firebase.projectId,
    storageBucket: Constants.expoConfig.storageBucket,
    messagingSenderId:Constants.expoConfig.messagingSenderId,
    appId:Constants.expoConfig.extra.firebase.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});
