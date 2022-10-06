import s from './Appbar.module.css';
import Button from './../Button/Button';
import Searchbar from '../Searchbar/Searchbar';
import { useState } from 'react';
import ModalPage from './../ModalPage/ModalPage';

export default function Appbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={s.header}>
      <Searchbar onSubmit={() => {}} />
      <div className={s.btn}>
        <Button onClick={() => setShowModal(true)} title="Create new hero" />
      </div>
      {showModal && <ModalPage onClose={() => setShowModal(false)} />}
    </header>
  );
}
