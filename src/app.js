'use strict';

import User from './components/User.js';
import { btnsContainer, headerEl } from './dom.js';
import { auth, onAuthStateChanged } from './firebase.js';
import { loginHandler, logoutHandler } from './handlers.js';
import { update } from './helpers.js';

onAuthStateChanged(auth, (user) => {
  if (!user) {
    update(headerEl, '');
    // show login btn & hide logout btn
    btnsContainer.querySelector('.btn-login').classList.remove('hidden');
    btnsContainer.querySelector('.btn-logout').classList.add('hidden');
  }

  if (user) {
    update(headerEl, User({ ...user }));
    // show logout btn & hide login btn
    btnsContainer.querySelector('.btn-login').classList.add('hidden');
    btnsContainer.querySelector('.btn-logout').classList.remove('hidden');
  }
});

btnsContainer.addEventListener('click', loginHandler);
btnsContainer.addEventListener('click', logoutHandler);
