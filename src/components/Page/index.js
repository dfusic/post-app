import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Page = ({ children }) => <StyledPage>{children}</StyledPage>;

const StyledPage = styled.div`
  margin-top: 50px;
`;

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Page;
