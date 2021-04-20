import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

import AllPostsPage from './pages/AllPostsPage';
import SinglePostPage from './pages/SinglePostPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/posts" />
      </Route>
      <Route exact path="/posts" component={AllPostsPage} />
      <Route path="/posts/:postId" component={SinglePostPage} />
    </Switch>
  </Router>
);

export default App;
