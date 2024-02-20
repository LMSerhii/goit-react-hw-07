import css from './Titile.module.css';

export default function Title({ children }) {
  return <h1 className={css.title}>{children}</h1>;
}
