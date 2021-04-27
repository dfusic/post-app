/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Page from './index';

test('renders component', () => {
  expect(() => {
    render(<Page />);
  });
});

test('matches snapshot', () => {
  expect(() => {
    render(<Page />);
  }).toMatchSnapshot();
});
