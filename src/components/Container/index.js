import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Container.displayName = 'Container';

export default Container;
