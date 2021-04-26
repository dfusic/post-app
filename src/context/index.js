/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/comments'),
        axios.get('https://jsonplaceholder.typicode.com/users'),
      ])
      .then(
        axios.spread((postsResponse, commentsResponse, usersResponse) => {
          if (postsResponse && commentsResponse && usersResponse) {
            setPosts(postsResponse.data);
            setComments(commentsResponse.data);
            setUsers(usersResponse.data);
          }
        })
      )
      .catch((error) => {
        if (error) {
          setPosts(null);
          setUsers(null);
          setComments(null);
        }
      });
  }, []);

  const contextData = useMemo(
    () => ({
      posts,
      comments,
      users,
    }),
    [posts, comments, users]
  );

  return <PostsContext.Provider value={contextData}>{children}</PostsContext.Provider>;
};

PostsContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PostsContext, PostsContextProvider };
