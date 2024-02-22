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

export default function Contact({ id, name, phone, randomColor }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>
          <span
            className={css.iconWrapper}
            style={{ backgroundColor: `${randomColor}` }}
          >
            <FaUserAlt className={css.icon} />
          </span>
          {name}
        </p>
        <p className={css.number}>
          <span
            className={css.iconWrapper}
            style={{ backgroundColor: `${randomColor}` }}
          >
            <FaPhoneAlt className={css.icon} />
          </span>
          {phone}
        </p>
      </div>
      <div className={css.buttonGroup}>
        <Button className={css.button} onClick={openModal}>
          <FaEdit size={24} color="	#353839" />
        </Button>
        <Button
          className={css.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          <IoClose size={32} color="rgba(255, 0, 0, 0.5)" />
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditContact onClose={closeModal} id={id} name={name} phone={phone} />
      </Modal>
    </div>
  );
}
