/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './index';

const SearchComponentWithoutReset = (
  <Search onChange={() => {}} value="" onSubmit={() => {}} resetSearch={() => {}} />
);

const SearchComponentWithReset = (
  <Search onChange={() => {}} value="search" onSubmit={() => {}} resetSearch={() => {}} />
);

test('renders component with and without reset', () => {
  render(SearchComponentWithoutReset);
  render(SearchComponentWithReset);
});

test('renders reset', () => {
  render(SearchComponentWithReset);
  expect(screen.getByText('Reset'));
});

test('can type into input', () => {
  render(SearchComponentWithoutReset);
  const input = screen.getByPlaceholderText('Search posts from user.');
  userEvent.type(input, 'searching...');
});

test('matches snapshot - without reset', () => {
  expect(() => {
    render(SearchComponentWithoutReset);
  }).toMatchSnapshot();
});

test('matches snapshot - with reset', () => {
  expect(() => {
    render(SearchComponentWithReset);
  }).toMatchSnapshot();
});
