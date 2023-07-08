'use strict';

import User from './components/User.js';
import { app, btnSign, header, signIn } from './dom.js';
import { auth, onAuthStateChanged } from './firebase.js';
import { singInHandler, signOutHandler } from './handlers.js';
import { clear, render, update } from './helpers.js';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // show app
    signIn.classList.add('hidden');
    clear(header);
    render(User({ ...user }), header);
    app.classList.remove('hidden');
  }

  if (!user) {
    // hide app & show login page
    app.classList.add('hidden');
    signIn.classList.remove('hidden');
  }
});

btnSign.addEventListener('click', singInHandler);
header.addEventListener('click', signOutHandler);
