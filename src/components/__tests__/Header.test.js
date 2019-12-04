import React from 'react';
import ReactDom, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from '../Header';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  contianer = null;
});

it('renders without crashing', () => {
  act(() => {
    ReactDom.render(<Header />, container);
  });
});
