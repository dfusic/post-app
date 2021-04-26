import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

import { PostsContextProvider } from './context';

import AllPostsPage from './pages/AllPostsPage';
import SinglePostPage from './pages/SinglePostPage';

const App = () => (
  <Router>
    <Switch>
      <PostsContextProvider>
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts" component={AllPostsPage} />
        <Route path="/posts/:postId" component={SinglePostPage} />
      </PostsContextProvider>
    </Switch>
  </Router>
);

export default App;
