import actionTypes from '../actions/ActionTypes';

const INITIAL_STATE = {
  posts: {data: []},
  comments: {data: []},
  photos: {data: []},
  albums: {data: []},
  users: {data: []},
  todos: {data: []}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_REQUEST:
      return Object.assign({}, state, {
        todos: {asyncStatus: 'PENDING', data: []}
      });

    case actionTypes.FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        posts: {asyncStatus: 'PENDING', data: []}
      });

    case actionTypes.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, state, {
        comments: {asyncStatus: 'PENDING', data: []}
      });

    case actionTypes.FETCH_PHOTOS_REQUEST:
      return Object.assign({}, state, {
        photos: {asyncStatus: 'PENDING', data: []}
      });

    case actionTypes.FETCH_ALBUMS_REQUEST:
      return Object.assign({}, state, {
        albums: {asyncStatus: 'PENDING', data: []}
      });

    case actionTypes.FETCH_USERS_REQUEST:
      return Object.assign({}, state, {
        users: {asyncStatus: 'PENDING', data: []}
      });

    case actionTypes.FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        posts: {asyncStatus: 'SUCCESS', data: action.json.slice(0, 10)}
      });

    case actionTypes.FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: {asyncStatus: 'SUCCESS', data: action.json.slice(0, 10)}
      });

    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        comments: {asyncStatus: 'SUCCESS', data: action.json.slice(0, 10)}
      });

    case actionTypes.FETCH_PHOTOS_SUCCESS:
      return Object.assign({}, state, {
        photos: {asyncStatus: 'SUCCESS', data: action.json.slice(0, 10)}
      });

    case actionTypes.FETCH_ALBUMS_SUCCESS:
      return Object.assign({}, state, {
        albums: {asyncStatus: 'SUCCESS', data: action.json.slice(0, 10)}
      });

    case actionTypes.FETCH_TODOS_SUCCESS:
      return Object.assign({}, state, {
        todos: {asyncStatus: 'SUCCESS', data: action.json.slice(0, 10)}
      });

    default: return state;
  }
}
