/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Comment from './index';

const CommentComponent = <Comment name="name" email="email" body="body" />;

test('renders comment', () => {
  render(CommentComponent);
});

test('renders comment props', () => {
  render(CommentComponent);
  expect(screen.getByText('name')).toBeInTheDocument();
  expect(screen.getByText('email')).toBeInTheDocument();
  expect(screen.getByText('body')).toBeInTheDocument();
});

test('matches snapshot', () => {
  expect(() => {
    render(CommentComponent);
  }).toMatchSnapshot();
});
