'use strict';

import { auth, db } from './firebase.js';

import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
import {
  collection,
  addDoc,
  serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';

export const singInHandler = async (e) => {
  await signInWithPopup(auth, new GoogleAuthProvider());
};

export const signOutHandler = async (e) => {
  const btnLogout = e.target.closest('.btn-logout');
  if (!btnLogout) return;

  btnLogout && (await signOut(auth));
};

export const addTodoHandler = (e) => {
  e.preventDefault();

  const input = e.target.querySelector('.input');
  const { value } = input;
  if (!value) return;

  const { currentUser } = auth;
  if (!currentUser) return;

  const addTodo = async () => {
    try {
      await addDoc(collection(db, 'users', currentUser.uid, 'todos'), {
        todo: value,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // add todo
  addTodo();

  // clear input
  input.value = '';
};
