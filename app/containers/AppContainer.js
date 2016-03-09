import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import '../styles/app.css';

import {
  fetchPosts,
  fetchUsers,
  fetchAlbums,
  fetchComments,
  fetchPhotos,
  fetchTodos
} from '../actions/ActionCreators';

class App extends Component {
  render () {
    return (
      <div>
        <h1><Link to='/'>Awesome App!</Link></h1>
        <ul className='nav-sections'>
          <li><Link to='/photos'>Photos</Link></li>
          <li><Link to='/albums'>Albums</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/comments'>Comments</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/todos'>Todos</Link></li>
        </ul>
        {
          React.Children.map(this.props.children, c => {
            return React.cloneElement(c, {
              todos: this.props.todos,
              users: this.props.users,
              posts: this.props.posts,
              comments: this.props.comments,
              albums: this.props.albums,
              photos: this.props.photos,
              fetchTodos: this.props.fetchTodos,
              fetchPhotos: this.props.fetchPhotos,
              fetchUsers: this.props.fetchUsers,
              fetchPosts: this.props.fetchPosts,
              fetchComments: this.props.fetchComments,
              fetchAlbums: this.props.fetchAlbums
            });
          }) || <h3>Click on above links to see magic</h3>
        }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  todos: PropTypes.object,
  users: PropTypes.object,
  posts: PropTypes.object,
  comments: PropTypes.object,
  albums: PropTypes.object,
  photos: PropTypes.object,
  fetchTodos: PropTypes.func,
  fetchPhotos: PropTypes.func,
  fetchUsers: PropTypes.func,
  fetchPosts: PropTypes.func,
  fetchComments: PropTypes.func,
  fetchAlbums: PropTypes.func
};

function mapStateToProps (state) {
  return {
    photos: state.photos,
    albums: state.albums,
    comments: state.comments,
    users: state.users,
    posts: state.posts,
    todos: state.todos
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPhotos: () => dispatch(fetchPhotos())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
