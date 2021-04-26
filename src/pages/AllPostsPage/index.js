/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Page, Spinner, ErrorMessage, SinglePost, Search } from '../../components';
import usePosts from '../../hooks';

const AllPostsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPosts, setCurrentPosts] = useState(null);
  const { posts, users } = usePosts();

  useEffect(() => {
    setIsLoading(true);

    if (!posts) {
      setIsLoading(false);
      setIsError(true);
    }

    if (posts) {
      setIsError(false);
      setIsLoading(false);
      setCurrentPosts(posts);
    }
  }, [posts]);

  useEffect(() => {
    console.log({ search });
    // autocomplete
    if (search.length > 1) {
      const foundUsers = users.find((user) => {
        const lowerCaseName = user.name.toLowerCase();
        if (lowerCaseName.includes(search)) {
          return user;
        }
        return null;
      });

      if (foundUsers) {
        const postsFromUser = posts.filter((singlePost) => singlePost.userId === foundUsers.id);
        setCurrentPosts(postsFromUser);
      }
    }
  }, [search]);

  const setSearchInput = (e) => setSearch(e.target.value);

  return (
    <Page>
      <Container>
        <Search value={search} onChange={setSearchInput} />
        {isLoading && <Spinner />}
        {isError && <ErrorMessage message="Error fetching posts!" />}
        {currentPosts && currentPosts.map((post) => <SinglePost key={post.id} id={post.id} />)}
      </Container>
    </Page>
  );
};

export default AllPostsPage;
