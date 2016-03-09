import React, {Component, PropTypes} from 'react';

export default class Posts extends Component {
  componentDidMount () {
    this.props.fetchPosts();
  }

  render () {
    if (this.props.posts.asyncStatus === 'PENDING') return <h2>Loading...</h2>;

    return (
      <div>
        <h3>Posts</h3>
        {
          this.props.posts.data.map(p => {
            return (
              <div key={p.id}>
                <span>{p.id}</span> {p.title}
                <pre>{p.body}</pre>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.object
};
