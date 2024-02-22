import css from './Aside.module.css';

export default function Aside({ children }) {
  return <aside className={css.aside}>{children}</aside>;
}
