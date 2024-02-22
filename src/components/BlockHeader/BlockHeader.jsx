import css from './BlockHeader.module.css';

export default function BlockHeader({ children }) {
  return <p className={css.header}>{children}</p>;
}
