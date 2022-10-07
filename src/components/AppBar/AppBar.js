import './Appbar.css';
import Button from './../Button/Button';
import { useState } from 'react';
import ModalPage from './../ModalPage/ModalPage';
import PropTypes from 'prop-types';

export default function Appbar({ setClosemodal }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="header">
      <Button
        onClick={() => {
          setShowModal(true);
          setClosemodal('');
        }}
        title="Create new hero"
      />
      {showModal && (
        <ModalPage
          onClose={() => {
            setShowModal(false);
            setClosemodal('Create new hero');
          }}
        />
      )}
    </header>
  );
}
Appbar.propTypes = {
  setClosemodal: PropTypes.func.isRequired,
};
