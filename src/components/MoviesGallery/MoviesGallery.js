import React from 'react';
import s from './MoviesGallery.module.css';
import PropTypes from 'prop-types';

export default function MoviesGallery({ moviesList, onOpen }) {
  return (
    <ul id="MoviesGallery" className={s.MovieGrid}>
      {moviesList.map(({ _id, nickname, image }) => (
        <li key={_id} className={s.Item} onClick={() => onOpen(_id)}>
          <div className={s.Link}>
            <img className={s.Img} src={image} alt={nickname} />
            <p className={s.title}>{nickname}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

MoviesGallery.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      nickname: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  onOpen: PropTypes.func.isRequired,
};
