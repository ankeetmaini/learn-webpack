import actionTypes from './ActionTypes';
import fetch from 'isomorphic-fetch';

const url = 'http://jsonplaceholder.typicode.com/';

function fetchPosts () {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_POSTS_REQUEST});
    return fetch(url + 'posts')
      .then(response => response.json())
      .then(json => dispatch({type: actionTypes.FETCH_POSTS_SUCCESS, json}));
  };
}

function fetchComments () {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_COMMENTS_REQUEST});
    return fetch(url + 'comments')
      .then(response => response.json())
      .then(json => dispatch({type: actionTypes.FETCH_COMMENTS_SUCCESS, json}));
  };
}

function fetchPhotos () {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_PHOTOS_REQUEST});
    return fetch(url + 'photos')
      .then(response => response.json())
      .then(json => dispatch({type: actionTypes.FETCH_PHOTOS_SUCCESS, json}));
  };
}

function fetchAlbums () {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_ALBUMS_REQUEST});
    return fetch(url + 'albums')
      .then(response => response.json())
      .then(json => dispatch({type: actionTypes.FETCH_ALBUMS_SUCCESS, json}));
  };
}

function fetchUsers () {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_USERS_REQUEST});
    return fetch(url + 'users')
      .then(response => response.json())
      .then(json => dispatch({type: actionTypes.FETCH_USERS_SUCCESS, json}));
  };
}

function fetchTodos () {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_TODOS_REQUEST});
    return fetch(url + 'todos')
      .then(response => response.json())
      .then(json => dispatch({type: actionTypes.FETCH_TODOS_SUCCESS, json}));
  };
}

export {
  fetchPosts,
  fetchUsers,
  fetchAlbums,
  fetchComments,
  fetchPhotos,
  fetchTodos
};
