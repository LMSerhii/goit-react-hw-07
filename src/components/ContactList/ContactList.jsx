import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getContacts } from '../../redux/contactsSlice';
import { getQuery } from '../../redux/filtersSlice';
import { search } from '../../helpers/searchFunction';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const query = useSelector(getQuery);

  const filtredContacts = search(contacts, query);

  return (
    <ul className={css.contactList}>
      {filtredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
