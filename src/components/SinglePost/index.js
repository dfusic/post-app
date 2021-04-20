import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
  const { title, content, id } = props;

  return (
    <StyledSinglePost>
      <h2>{title}</h2>
      <p>{content}</p>
      <Link to={`/posts/${id}`}>Go to post</Link>
    </StyledSinglePost>
  );
};

SinglePost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const StyledSinglePost = styled.div`
  margin: 32px 0;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: #292929;
    line-height: 28px;
    margin: 0 0 16px 0;
  }
  p {
    margin: 0;
    font-family: 'Merriweather', serif;
    font-size: 16px;
    color: #757575;
    line-height: 20px;
    margin-bottom: 16px;
  }
  a {
    font-family: 'Roboto', sans-serif;
  }
`;

export default SinglePost;
