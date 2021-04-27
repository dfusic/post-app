/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Page = ({ children }) => {
  // with recursion loop through all children and console.log "Hello from: ${componentName}"
  const sayHello = (currentChild) => {
    if (currentChild?.type) {
      if (typeof currentChild.type === 'function') {
        console.log('Hello from:', currentChild.type.displayName);
      }
    }
    if (currentChild?.props?.children) {
      React.Children.map(currentChild.props.children, (secondChild) => {
        if (secondChild) {
          sayHello(secondChild);
        }
      });
    }
  };

  useEffect(() => {
    if (children) {
      React.Children.map(children, (child) => {
        sayHello(child);
      });
    }
  }, [children]);
  return <StyledPage>{children}</StyledPage>;
};

const StyledPage = styled.div`
  margin-top: 50px;
`;

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Page.displayName = 'Page';

export default Page;
