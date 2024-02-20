import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import Button from '../Button/Button';
import { addContacts, getContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long')
    .required('Required'),
});

const initialValues = { name: '', number: '' };

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const contacts = useSelector(getContacts);

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSaubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </div>

        <div>
          <label className={css.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </div>

        <Button className={css.button} type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}
