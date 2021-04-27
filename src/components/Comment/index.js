import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Comment = (props) => {
  const { body, email, name } = props;

  return (
    <StyledComment>
      <h4 className="comment-name">{name}</h4>
      <p className="comment-email">{email}</p>
      <p className="comment-body">{body}</p>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  display: block;

  .comment-name {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 8px;
  }
  .comment-email {
    font-size: 14px;
    margin-bottom: 8px;
  }
  .comment-body {
    font-size: 14px;
    margin: 0;
  }
`;

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Comment.displayName = 'Comment';
StyledComment.displayName = 'StyledComment';
export default Comment;
