import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ onKeyDown, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
        onKeyDown();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKeyDown]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      console.log('Кликнули по бекдропу');
      onKeyDown();
    }
  };
  return (
    <div className={s.Backdrop} onClick={handleBackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  onKeyDown: PropTypes.func,
};

export default Modal;
