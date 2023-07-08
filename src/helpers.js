'use strict';

export const render = (markup, parent, pos = 'afterbegin') => {
  parent.insertAdjacentHTML(pos, markup);
};

export const clear = (parent) => {
  parent.innerHTML = '';
};

export const hide = (el) => {
  el.classList.add('hidden');
};

export const load = (LoadingMarkup, parent, length = 2) => {
  const Loading = Array.from({ length }, (_, i) => i + 1)
    .map((_) => LoadingMarkup())
    .join('');
  render(Loading, parent);
};

export const update = (parent, newMarkup) => {
  clear(parent);
  render(newMarkup, parent);
};
