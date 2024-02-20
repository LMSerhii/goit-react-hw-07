import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { deleteContacts } from '../../redux/contactsSlice';
import Button from '../Button/Button';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>
          <FaUserAlt className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <Button
        className={css.button}
        onClick={() => dispatch(deleteContacts(id))}
      >
        <IoClose size={32} />
      </Button>
    </div>
  );
}
