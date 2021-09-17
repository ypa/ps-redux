import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

// Shallow render approach, can search for React component tag NavLink
// Fast and lightweight
it('contains 3 NavLinks via shallow', () => {
  const numLinks = shallow(<Header />).find('NavLink').length;
  expect(numLinks).toEqual(3);
});

// Mount approach generates actual HTML DOM.
// Also need to pull in React Router's MemoryRouter
// More realistic DOM and its child components are rendered.
it('contains 3 anchors via mount', () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find('a').length;

  expect(numAnchors).toEqual(3);
});
