/**
 * Firebase configuration
 * Uses Firebase Auth for user management and Firestore for data.
 */
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    signOut
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

let app = null
let db = null
let auth = null
let analytics = null
const googleProvider = new GoogleAuthProvider()

export function initFirebase() {
    try {
        if (firebaseConfig.apiKey && firebaseConfig.projectId) {
            app = initializeApp(firebaseConfig)
            db = getFirestore(app)
            auth = getAuth(app)
            analytics = getAnalytics(app)
            console.log('✅ Firebase initialized (medigaurd1)')
        } else {
            console.log('ℹ️  Firebase not configured — running in local mode')
        }
    } catch (err) {
        console.warn('Firebase init failed:', err)
    }
}

export function getDb() {
    return db
}

export function getFirebaseAuth() {
    return auth
}

// Ensure Auth works smoothly
export {
    app, db, auth,
    googleProvider, signInWithPopup,
    signInWithEmailAndPassword, createUserWithEmailAndPassword,
    RecaptchaVerifier, signInWithPhoneNumber, signOut
}
