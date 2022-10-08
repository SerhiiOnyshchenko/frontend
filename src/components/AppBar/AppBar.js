import './Appbar.css';
import Button from './../Button/Button';
import { useState } from 'react';
import ModalPage from './../ModalPage/ModalPage';
import PropTypes from 'prop-types';

export default function Appbar({ featchList }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="header">
      <Button onClick={() => setShowModal(true)} title="Create new hero" />
      {showModal && (
        <ModalPage
          onClose={() => {
            setShowModal(false);
            featchList(1);
          }}
        />
      )}
    </header>
  );
}
Appbar.propTypes = {
  featchList: PropTypes.func.isRequired,
};
