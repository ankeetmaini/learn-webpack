import React, {Component, PropTypes} from 'react';

export default class Users extends Component {
  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    if (this.props.users.asyncStatus === 'PENDING') return <h2>Loading...</h2>;
    return (
      <div>
        <h3>Users</h3>
        {
          this.props.users.data.map(u => {
            return (
              <div key={u.id}>
                <span>{u.id}</span> {u.name}
                <div>username: {u.username}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func,
  users: PropTypes.object
};
