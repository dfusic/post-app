import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = () => <StyledSpinner />;

const SpinnerPulseAnimation = keyframes`
  0%{transform: scale(1)};
  50%{transform: scale(1.2)};
  100%{transform: scale(1)};
`;

const StyledSpinner = styled.div`
  margin: 0 auto;
  background-color: #263238;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  animation-name: ${SpinnerPulseAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

Spinner.displayName = 'Spinner';

export default Spinner;
