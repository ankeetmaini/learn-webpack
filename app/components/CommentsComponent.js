import React, {Component, PropTypes} from 'react';

export default class Comments extends Component {
  componentDidMount () {
    this.props.fetchComments();
  }

  render () {
    if (this.props.comments.asyncStatus === 'PENDING') return <h2>Loading...</h2>;

    return (
      <div>
        <h3>Comments</h3>
        {
          this.props.comments.data.map(c => {
            return (
              <div key={c.id}>
                <span>{c.id}</span> {c.name}
                <a href={'mailTo:' + c.email}>{c.email}</a>
                <pre>{c.body}</pre>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Comments.propTypes = {
  fetchComments: PropTypes.func,
  comments: PropTypes.object
};
