import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import App from './containers/AppContainer';
import Albums from './components/AlbumsComponent';
import Photos from './components/PhotosComponent';
import Posts from './components/PostsComponent';
import Comments from './components/CommentsComponent';
import Todos from './components/TodosComponent';
import Users from './components/UsersComponent';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/photos' component={Photos}/>
        <Route path='/albums' component={Albums}/>
        <Route path='/comments' component={Comments}/>
        <Route path='/users' component={Users}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/todos' component={Todos}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
