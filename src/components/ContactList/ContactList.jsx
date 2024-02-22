import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { search } from '../../helpers/searchFunction';
import css from './ContactList.module.css';
import { getContacts, getQuery } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const query = useSelector(getQuery);

  const filtredContacts = search(contacts, query);

  return (
    <ul className={css.contactList}>
      {filtredContacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} phone={phone} />
          </li>
        );
      })}
    </ul>
  );
}
