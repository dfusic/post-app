/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import usePosts from '../../hooks';

import Comment from '../Comment';
import Spinner from '../Spinner';

const SinglePost = (props) => {
  const { id } = props;
  const [post, setPost] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const [postAuthor, setPostAuthor] = useState('Duro Fusic');

  const { posts, comments, users, findPostById, findCommentsByPostId, findUserById } = usePosts();

  useEffect(() => {
    if (posts) {
      const selectedPost = findPostById(id);

      if (selectedPost) {
        setPost(selectedPost);
      }
    }
  }, [id, posts]);

  useEffect(() => {
    if (comments) {
      const selectedPostComments = findCommentsByPostId(id);
      if (selectedPostComments) {
        setPostComments(selectedPostComments);
      }
    }
  }, [id, comments]);

  useEffect(() => {
    if (users && post) {
      const selectedPostAuthor = findUserById(post.userId);
      if (selectedPostAuthor) {
        setPostAuthor(selectedPostAuthor.name);
      }
    }
  }, [id, users, post]);

  return (
    <>
      {post ? (
        <StyledSinglePost>
          <h2>{post?.title || ''}</h2>
          <h3>{postAuthor || ''}</h3>
          <p>{post?.body || ''}</p>
          {postComments && (
            <StyledCommentsWrapper>
              {postComments.map((comment) => (
                <Comment
                  body={comment.body}
                  email={comment.email}
                  name={comment.name}
                  key={comment.id}
                />
              ))}
            </StyledCommentsWrapper>
          )}
          <Link to={`/posts/${id}`}>Go to post</Link>
        </StyledSinglePost>
      ) : (
        <Spinner />
      )}
    </>
  );
};

SinglePost.propTypes = {
  id: PropTypes.number.isRequired,
};

const StyledSinglePost = styled.div`
  margin: 32px 0;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: #292929;
    line-height: 28px;
    margin: 0 0 16px 0;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
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
    margin-top: 16px !important;
    display: block;
    text-decoration: none;
  }
`;

const StyledCommentsWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

SinglePost.displayName = 'SinglePost';

export default SinglePost;
