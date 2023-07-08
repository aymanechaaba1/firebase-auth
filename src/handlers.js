'use strict';

import { auth, googleProvider, signInWithPopup, signOut } from './firebase.js';

export const singInHandler = async (e) => {
  await signInWithPopup(auth, googleProvider);
};

export const signOutHandler = async (e) => {
  const btnLogout = e.target.closest('.btn-logout');
  if (!btnLogout) return;

  btnLogout && (await signOut(auth));
};
