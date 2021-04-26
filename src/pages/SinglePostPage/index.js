/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import usePosts from '../../hooks';

import { Page, Container, Comment, Spinner } from '../../components';

const SinglePostPage = () => {
  const { postId } = useParams();

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostComments, setSelectedPostComments] = useState(null);

  const { posts, comments, findPostById, findCommentsByPostId } = usePosts();

  useEffect(() => {
    if (postId && posts) {
      const postFromContext = findPostById(Number(postId));

      if (postFromContext) {
        setSelectedPost(postFromContext);
      }
    }
  }, [postId, posts]);

  useEffect(() => {
    const postCommentsFromContext = findCommentsByPostId(Number(postId));
    if (postCommentsFromContext) {
      setSelectedPostComments(postCommentsFromContext);
    }
  }, [comments, postId]);

  return (
    <Page>
      <Container>
        {selectedPost ? (
          <>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.body}</p>
          </>
        ) : (
          <Spinner />
        )}
        {selectedPostComments ? (
          selectedPostComments.map((comment) => (
            <Comment
              name={comment.name}
              email={comment.email}
              body={comment.body}
              key={comment.id}
            />
          ))
        ) : (
          <Spinner />
        )}
      </Container>
    </Page>
  );
};

export default SinglePostPage;
