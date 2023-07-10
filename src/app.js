'use strict';

import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
import {
  doc,
  setDoc,
  onSnapshot,
  query,
  collection,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
import User from './components/User.js';
import { app, btnSign, form, header, signIn, todosContainer } from './dom.js';
import { auth, db } from './firebase.js';
import { singInHandler, signOutHandler, addTodoHandler } from './handlers.js';
import { clear, render } from './helpers.js';
import Todo from './components/Todo.js';

const hideApp = () => {
  // hide app & show login page
  app.classList.add('hidden');
  signIn.classList.remove('hidden');
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // show app
    signIn.classList.add('hidden');
    clear(header);
    render(User({ ...user }), header);
    app.classList.remove('hidden');

    const addUser = async () => {
      try {
        await setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        });
      } catch (err) {
        console.error(err.message);
      }
    };

    // add user
    addUser();

    // display todos for that user
    onSnapshot(
      query(
        collection(db, 'users', user.uid, 'todos'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        const todos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(todos);
        const Todos = todos
          .map((todo) =>
            Todo({
              id: todo.id,
              todo: todo.todo,
              timestamp: todo?.timestamp?.toDate(),
            })
          )
          .join('');
        clear(todosContainer);
        render(Todos, todosContainer);
      }
    );
  }

  !user && hideApp();
});

form.addEventListener('submit', addTodoHandler);
btnSign.addEventListener('click', singInHandler);
header.addEventListener('click', signOutHandler);
