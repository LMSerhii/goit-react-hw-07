import { RiContactsBookFill } from 'react-icons/ri';
import css from './Title.module.css';

export default function Title() {
  return (
    <h1 className={css.title}>
      Phone Book <RiContactsBookFill />
    </h1>
  );
}
