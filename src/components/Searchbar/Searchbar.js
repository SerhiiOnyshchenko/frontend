import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onFormSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Search heros"
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
