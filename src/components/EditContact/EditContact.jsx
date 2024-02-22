import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/operations';
import toast from 'react-hot-toast';
import ContactForm from '../ContactForm/ContactForm';
import BlockHeader from '../BlockHeader/BlockHeader';

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
      <BlockHeader>You can edit this contact</BlockHeader>
      <ContactForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        action="Edit contact"
      />
    </>
  );
}
