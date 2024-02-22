import css from './EditContact.module.css';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/operations';
import toast from 'react-hot-toast';
import ContactForm from '../ContactForm/ContactForm';

export default function EditContact({ onClose, id, name, phone }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const currentValues = {
      ...values,
      contactId: id,
    };

    dispatch(updateContact(currentValues));
    toast.success('successfully edited');

    action.resetForm();
    onClose();
  };

  const initialValues = { name: name, number: phone };

  return (
    <>
      <p className={css.header}>You can edit this contact</p>
      <ContactForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        action="Edit contact"
      />
    </>
  );
}
