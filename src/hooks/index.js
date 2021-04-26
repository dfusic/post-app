import { useContext } from 'react';
import { PostsContext } from '../context';

const usePosts = () => {
  const { posts, comments, users } = useContext(PostsContext);

  // posts helpers
  const findPostById = (id) => {
    if (posts.length > 0 && posts) {
      return posts.find((post) => post.id === id);
    }
    return null;
  };

  const findPostsByUserId = (id) => posts.length > 0 && posts.find((post) => post.userId === id);

  // users helpers
  const findUserById = (id) => users.length > 0 && users.find((user) => user.id === id);

  // comment helpers
  const findCommentsByPostId = (id) =>
    comments.length > 0 && comments.filter((comment) => comment.postId === id);

  return {
    posts,
    comments,
    users,
    findPostById,
    findPostsByUserId,
    findUserById,
    findCommentsByPostId,
  };
};

export default usePosts;
