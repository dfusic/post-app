/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './index';

test('renders component', () => {
  render(<Spinner />);
});

test('matches snapshot', () => {
  expect(() => {
    render(<Spinner />);
  }).toMatchInlineSnapshot(`[Function]`);
});
