import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Page, ErrorMessage, Spinner, SinglePost } from '../../components';

const AllPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response) {
          setPosts(response.data);
        }
      })
      .catch(() => setIsError(true))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Page>
      <Container>
        {isLoading && <Spinner />}
        {isError && <ErrorMessage message="Failed to fetch posts!" />}
        {posts.map((post) => (
          <SinglePost key={post.id} title={post.title} content={post.body} id={post.id} />
        ))}
      </Container>
    </Page>
  );
};

export default AllPostsPage;
