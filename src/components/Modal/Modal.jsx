import { IoClose } from 'react-icons/io5';
import clsx from 'clsx';
import css from './Modal.module.css';

export default function Modal({ isOpen, onClose, children }) {
  const modalClasses = clsx(css.modal, isOpen && css.open);

  return (
    <div className={modalClasses}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={onClose}>
          <IoClose size={32} />
        </span>
        {children}
      </div>
    </div>
  );
}
