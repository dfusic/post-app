/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Container from './index';

test('renders container', () => {
  expect(() => {
    render(
      <Container>
        <p>children</p>
      </Container>
    );
  });
});

test('matches snapshot', () => {
  expect(() => {
    render(
      <Container>
        <p>children</p>
      </Container>
    );
  }).toMatchSnapshot();
});
