import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorMessage = ({ message = 'Oops! Something went wrong!' }) => (
  <StyledErrorMessage>
    <p>{message}</p>
  </StyledErrorMessage>
);

const StyledErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    color: #212121;
  }
`;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 'Oops! Something went wrong!',
};

export default ErrorMessage;
