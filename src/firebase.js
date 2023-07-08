'use strict';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBLru6dre6OVCWdjzd1k7Jm0oKDOvOwa8M',
  authDomain: 'fir-auth-de0f8.firebaseapp.com',
  projectId: 'fir-auth-de0f8',
  storageBucket: 'fir-auth-de0f8.appspot.com',
  messagingSenderId: '1037871697382',
  appId: '1:1037871697382:web:dd41d54c23357b8be79a27',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  signInWithPopup,
  googleProvider,
  signOut,
  onAuthStateChanged,
  user,
};
