import React, { useState, useEffect } from 'react';
import { Container, Page, Spinner, ErrorMessage, SinglePost, Search } from '../../components';
import usePosts from '../../hooks';

const AllPostsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPosts, setCurrentPosts] = useState(null);
  const [hasFoundPosts, setHasFoundPosts] = useState(true);

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

  const setSearchInput = (e) => setSearch(e.target.value);

  const handleSearchSubmit = () => {
    if (search.length > 0) {
      const foundUsers = users.find((user) => {
        const lowerCaseSearch = search.toLowerCase();
        const lowerCaseUserName = user.name.toLowerCase();
        if (lowerCaseUserName.includes(lowerCaseSearch)) {
          return user;
        }
        return null;
      });

      if (foundUsers) {
        const postsFromUser = posts.filter((singlePost) => singlePost.userId === foundUsers.id);
        setCurrentPosts(postsFromUser);
      } else {
        setCurrentPosts([]);
        setHasFoundPosts(false);
      }
    }
  };

  const handleClearSearch = () => {
    setSearch('');
    setCurrentPosts(posts);
    setHasFoundPosts(true);
  };

  return (
    <Page>
      <Container>
        <Search
          value={search}
          onChange={setSearchInput}
          onSubmit={handleSearchSubmit}
          resetSearch={handleClearSearch}
        />
        {isLoading && <Spinner />}
        {isError && <ErrorMessage message="Error fetching posts!" />}
        {!hasFoundPosts && <ErrorMessage message="No posts from this user." />}
        {currentPosts && currentPosts.map((post) => <SinglePost key={post.id} id={post.id} />)}
      </Container>
    </Page>
  );
};

export default AllPostsPage;
