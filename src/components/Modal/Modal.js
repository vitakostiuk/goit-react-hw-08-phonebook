import React from 'react';
// import { MdClose } from 'react-icons/md';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ children }) => {
  // useEffect(() => {
  // --------Обработка закрытия модалки - клик по Escape
  // const handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     console.log('Нажали ESC, нужно закрыть модалку');
  //     onKeyDown();
  //   }
  // };

  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [onKeyDown]);

  // --------Обработка закрытия модалки - клик по бэкдропу
  // const handleBackdropClick = e => {
  //   if (e.currentTarget === e.target) {
  //     console.log('Кликнули по бекдропу');
  //     onKeyDown();
  //   }
  // };

  // --------Обработка закрытия модалки - клик по кнопке Close
  // const handleCloseBtn = () => {
  //   onKeyDown();
  // };

  return (
    <div
      className={s.Backdrop}
      // onClick={handleBackdropClick}
    >
      <div className={s.Modal}>
        {/* <button 
          className={s.CloseBtn} 
          onClick={handleCloseBtn}>
          <MdClose size="24" />
        </button> */}
        {children}
      </div>
    </div>
  );
};

// Modal.propTypes = {
//   onKeyDown: PropTypes.func,
// };

export default Modal;
