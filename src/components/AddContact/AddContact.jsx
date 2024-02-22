import toast from 'react-hot-toast';
import ContactForm from '../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import BlockHeader from '../BlockHeader/BlockHeader';

export default function AddContact() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = { name: '', number: '' };

  const handleSaubmit = (values, action) => {
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (existingContact) {
      toast.error('This contact already exists.');
      return;
    }

    dispatch(addContacts(values));

    toast.success('Contact added successfully!');
    action.resetForm();
  };

  return (
    <>
      <BlockHeader>Add new contact</BlockHeader>
      <ContactForm
        initialValues={initialValues}
        onSubmit={handleSaubmit}
        action="Add contact"
      />
    </>
  );
}
