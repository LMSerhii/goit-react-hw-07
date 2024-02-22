import { IoClose } from 'react-icons/io5';
import clsx from 'clsx';
import css from './Modal.module.css';
import Button from '../Button/Button';
import { useId, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/operations';

export default function Modal({ isOpen, onClose, id, name, phone }) {
  const [currName, setCurrName] = useState(name);
  const [currPhone, setCurrPhone] = useState(phone);
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const modalClasses = clsx(css.modal, isOpen && css.open);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const values = {
      name: currName,
      phone: currPhone,
      contactId: id,
    };

    dispatch(updateContact(values));

    toast.success('successfully edited');
    form.reset();

    onClose();
  };

  return (
    <div className={modalClasses}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={onClose}>
          <IoClose size={32} />
        </span>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            value={currName}
            id={nameId}
            autoComplete="off"
            onChange={e => setCurrName(e.target.value)}
          />
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <input
            className={css.input}
            type="text"
            name="phone"
            value={currPhone}
            id={phoneId}
            autoComplete="off"
            onChange={e => setCurrPhone(e.target.value)}
          />
          <Button className={css.button} type="submit">
            Edit contact
          </Button>
        </form>
      </div>
    </div>
  );
}
