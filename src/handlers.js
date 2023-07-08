'use strict';

import { auth, googleProvider, signInWithPopup, signOut } from './firebase.js';

export const loginHandler = (e) => {
  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err.message);
    }
  };

  const btnLogin = e.target.closest('.btn-login');
  if (!btnLogin) return;

  btnLogin && login();
};

export const logoutHandler = (e) => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err.message);
    }
  };

  const btnLogout = e.target.closest('.btn-logout');
  if (!btnLogout) return;

  btnLogout && logout();
};
