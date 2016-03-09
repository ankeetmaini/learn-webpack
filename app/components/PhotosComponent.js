import React, {Component, PropTypes} from 'react';

export default class Photos extends Component {
  componentDidMount () {
    this.props.fetchPhotos();
  }

  render () {
    if (this.props.photos.asyncStatus === 'PENDING') return <h2>Loading...</h2>;

    return (
      <div>
        <h3>Photos</h3>
        {
          this.props.photos.data.map(p => {
            return (
              <div key={p.id}>
                <span>{p.id}</span> {p.title}
                <img src={p.thumbnailUrl}/>
                <a href={p.url} traget='_blank'>View full picture</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Photos.propTypes = {
  fetchPhotos: PropTypes.func,
  photos: PropTypes.object
};
