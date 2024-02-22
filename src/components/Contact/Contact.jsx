import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/operations';
import EditContact from '../EditContact/EditContact';

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUserAlt className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} />
          {phone}
        </p>
      </div>
      <div className={css.buttonGroup}>
        <Button className={css.button} onClick={openModal}>
          <FaEdit size={24} />
        </Button>
        <Button
          className={css.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          <IoClose size={32} />
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditContact onClose={closeModal} id={id} name={name} phone={phone} />
      </Modal>
    </div>
  );
}
