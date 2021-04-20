import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Page, Container, Spinner } from '../../components';

const SinglePostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (response?.data) {
          setPost(response.data);
        }
      })
      .catch((error) => console.log({ error }))
      .then(() => setIsLoading(false));
  }, [postId]);

  useEffect(() => {
    console.log({ post });
  }, [post]);

  return (
    <Page>
      <Container>
        {isLoading && <Spinner />}
        {post && (
          <>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </>
        )}
      </Container>
    </Page>
  );
};

export default SinglePostPage;
