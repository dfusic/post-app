import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { onChange, value, onSubmit, resetSearch } = props;

  return (
    <StyledSearch>
      <StyledSearchInput
        placeholder="Search posts from user."
        value={value}
        onChange={(e) => onChange(e)}
      />
      <StyledSearchButton onClick={onSubmit}>Search</StyledSearchButton>
      {value.length > 0 && <StyledSearchButton onClick={resetSearch}>Reset</StyledSearchButton>}
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  border: 1px solid grey;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
`;
const StyledSearchButton = styled.button`
  border: 1px solid grey;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  width: 15%;
  cursor: pointer;
`;

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};

Search.displayName = 'Search';

export default Search;
