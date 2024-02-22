import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFiltredContacts } from '../../redux/selectors';

export default function ContactList() {
  const filtredContacts = useSelector(selectFiltredContacts);

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
