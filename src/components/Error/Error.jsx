import css from './Error.module.css';

export default function Error({ children }) {
  return (
    <div className={css.error}>
      <p>{children}</p>
    </div>
  );
}
