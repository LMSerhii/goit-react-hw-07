import css from './MainComponent.module.css';

export default function Main({ children }) {
  return <main className={css.main}>{children}</main>;
}
