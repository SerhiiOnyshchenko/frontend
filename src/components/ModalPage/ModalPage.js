import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './ModalPage.css';
import { addHero } from './../../services/hero-api';

export default function ModalPage({ onClose }) {
  const modalRoot = useRef(document.querySelector('#modal-root'));
  const form = document.querySelector('#form');

  const [successFile, setSuccessFile] = useState(false);
  const [errorFile, setErrorFile] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [nickname, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [originDescription, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [fileInput, setFileInput] = useState(null);

  useEffect(() => {
    setSuccessFile(false);
    setErrorFile(false);
    window.addEventListener('keydown', closeModalEscKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeInput = evt => {
    const [file] = evt.target.files;
    setFileInput(file);
    setSuccessFile(false);
    setErrorFile(false);
  };

  const hendleUpload = async e => {
    // e.defaultprevented();
    setUploading(true);
    try {
      const formData = new FormData(form);
      await addHero(formData);
      setSuccessFile(true);
      reset();
      onClose();
    } catch (error) {
      setErrorFile(error);
      setTimeout(() => {
        setErrorFile(false);
      }, 3000);
    }
    setUploading(false);
  };

  const reset = () => {
    setFileInput(null);
    setNickname('');
    setRealName('');
    setOriginDescription('');
    setSuperpowers('');
    setCatchPhrase('');
  };

  function closeModalEscKey(e) {
    if (e.target.className === 'App') {
      onClose();
    }
    if (e.code === 'Escape') {
      onClose();
      window.removeEventListener('keydown', closeModalEscKey);
    }
  }

  return createPortal(
    <div className="modal-page__backdrop" onClick={closeModalEscKey}>
      <form id="form" className="modal-page__form">
        <div className="modal-page__left">
          <label>
            <span className="modal-page__title">Nickname</span>
            <input
              type="text"
              name="nickname"
              required
              value={nickname}
              onChange={e => setNickname(e.currentTarget.value)}
            />
          </label>
          <label>
            <span className="modal-page__title">Real Name</span>
            <input
              type="text"
              name="realName"
              value={realName}
              required
              onChange={e => setRealName(e.currentTarget.value)}
            />
          </label>
          <label>
            <span className="modal-page__title">Origin Description</span>
            <textarea
              type="text"
              name="originDescription"
              required
              value={originDescription}
              onChange={e => setOriginDescription(e.currentTarget.value)}
            />
          </label>
          <label>
            <span className="modal-page__title">Superpowers</span>
            <textarea
              type="text"
              name="superpowers"
              required
              value={superpowers}
              onChange={e => setSuperpowers(e.currentTarget.value)}
            />
          </label>
          <label>
            <span className="modal-page__title">Catch Phrase</span>
            <textarea
              type="text"
              name="catchPhrase"
              required
              value={catchPhrase}
              onChange={e => setCatchPhrase(e.currentTarget.value)}
            />
          </label>
        </div>
        <div className="modal-page__right">
          <button
            className="modal-page__btn-close"
            type="button"
            onClick={onClose}
          ></button>
          <h2 className="modal-page__title">
            Upload a .jpg or .png Hero Image
          </h2>
          <div className="modal-page__drag-box">
            <div
              className={
                errorFile
                  ? 'modal-page__drag modal-page__drag--error'
                  : 'modal-page__drag'
              }
            >
              <p>
                Drag here<span>your file or</span>
              </p>
              <p>
                Click here<span>to upload</span>
              </p>
            </div>
            {fileInput && (
              <img
                className="modal-page__file-img"
                id="modalFileImg"
                src={URL.createObjectURL(fileInput)}
                alt={fileInput.name}
              />
            )}{' '}
            <input
              className="modal-page__input"
              type="file"
              name="image"
              accept=".jpg,.png"
              onChange={changeInput}
            ></input>
          </div>
          <div className="modal-page__text">
            {fileInput
              ? `Image File Name: ${fileInput.name}`
              : 'No file selected'}
          </div>
          {fileInput &&
            !errorFile &&
            (uploading ? (
              <button
                className="modal-page__btn-loading"
                type="button"
                disabled={uploading}
              >
                <div className="modal-page__btn-icon-upload"></div>
                uploading
              </button>
            ) : (
              <input
                className="modal-page__btn-upload"
                type="submit"
                onClick={hendleUpload}
                value="upload"
              />
            ))}
          {successFile && (
            <div className="modal-page__success">
              <span className="modal-page__success--icon"></span>
              Thanks for the Upload!
            </div>
          )}

          {errorFile && (
            <div className="modal-page__success">
              <span className="modal-page__error--icon"></span>
              Error: {errorFile.response.data.message}
            </div>
          )}
        </div>
      </form>
    </div>,
    modalRoot.current
  );
}
