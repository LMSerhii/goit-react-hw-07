import { useId, useState } from 'react';
import css from './EditContact.module.css';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/operations';
import toast from 'react-hot-toast';
import Button from '../Button/Button';

export default function EditContact({ onClose, id, name, phone }) {
  const [currName, setCurrName] = useState(name);
  const [currPhone, setCurrPhone] = useState(phone);
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

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
        autoFocus
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
  );
}
