import React, {Component, PropTypes} from 'react';

export default class Todos extends Component {
  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    if (this.props.todos.asyncStatus === 'PENDING') return <h2>Loading...</h2>;

    return (
      <div>
        <h3>Todos</h3>
        {
          this.props.todos.data.map(t => {
            return (
              <div key={t.id}>
                <span>{t.id}</span> {t.title}
                <pre>Completed: {t.completed}</pre>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.object
};
