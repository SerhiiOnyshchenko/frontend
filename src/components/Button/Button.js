import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ onClick, title }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
