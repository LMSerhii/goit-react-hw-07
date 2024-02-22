import { RiContactsBookFill } from 'react-icons/ri';
import css from './Titile.module.css';

export default function Title() {
  return (
    <h1 className={css.title}>
      Phone Book <RiContactsBookFill />
    </h1>
  );
}
