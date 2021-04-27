/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './index';

test('renders component', () => {
  expect(() => {
    render(<ErrorMessage />);
  });
});

test('renders message', () => {
  render(<ErrorMessage message="Failed fetching posts" />);
  expect(() => {
    screen.getByText('Failed fetching posts');
  });
});

test('matches snapshot', () => {
  expect(() => {
    render(<ErrorMessage />);
  }).toMatchSnapshot();
});
