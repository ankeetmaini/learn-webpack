import React, {Component, PropTypes} from 'react';

export default class Albums extends Component {
  componentDidMount () {
    this.props.fetchAlbums();
  }

  render () {
    if (this.props.albums.asyncStatus === 'PENDING') return <h2>Loading...</h2>;

    return (
      <div>
        <h3>Albums</h3>
        {
          this.props.albums.data.map(a => {
            return (
              <div key={a.id}><span>{a.id}</span> {a.title}</div>
            );
          })
        }
      </div>
    );
  }
}

Albums.propTypes = {
  fetchAlbums: PropTypes.func,
  albums: PropTypes.object
};
