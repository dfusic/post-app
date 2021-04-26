import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { onChange, value } = props;

  return <StyledSearch value={value} onChange={(e) => onChange(e)} />;
};

const StyledSearch = styled.input`
  border: 1px solid red;
`;

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
