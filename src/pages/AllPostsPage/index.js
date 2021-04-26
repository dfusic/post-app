import React, { useState, useEffect } from 'react';
import { Container, Page, Spinner, ErrorMessage, SinglePost } from '../../components';
import usePosts from '../../hooks';

const AllPostsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { posts } = usePosts();

  useEffect(() => {
    setIsLoading(true);

    if (!posts) {
      setIsLoading(false);
      setIsError(true);
    }

    if (posts) {
      setIsError(false);
      setIsLoading(false);
    }
  }, [posts]);

  return (
    <Page>
      <Container>
        {isLoading && <Spinner />}
        {isError && <ErrorMessage message="Error fetching posts!" />}
        {posts && posts.map((post) => <SinglePost key={post.id} id={post.id} />)}
      </Container>
    </Page>
  );
};

export default AllPostsPage;
