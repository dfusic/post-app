# Posts app

- Displays posts, comments and users associated with post or comment
- 2 routes: `/posts`, `/posts/{postId}`

## How it works

- posts, users and comments are fetched from the dummy API
- posts, users and comments are saved inside of the context
- `/posts` shows all posts, comments associated with the post and search bar for searching through posts
- `/posts/{postId}` displays single post with author and comments

## How to start

- clone the project
- run `yarn` or `npm install`
- run `yarn start` or `npm run start`

## Custom hook

- all of the data can be accessed using `usePosts` hook

---

- `posts` -> list of all posts
- `comments` -> list of all comments
- `users` -> list of all users
- `findPostById(id)` -> returns a post with the given postId
- `findPostsByUserId(id)` -> returns posts from the specific userID
- `findUserById(id)` -> returns user from the given userId
- `findCommentsByPostId(id)` -> returns all comments for the postId

## Context

- global state of the application
- holds all posts, users and comments
- used directly with the `usePosts` hook, there is no need to access the context directly via `useContext` function.

- LOGIC: if the posts, users or comments are null, that means that there was an error while fetching the data, otherwise the array is empty or with items.

## Tests

- There are tests for all reusable components, usually snapshot, render and prop checking tests
