import css from './HomeLayout.module.css';

export default function HomeLayout({ children }) {
  return <div className={css.homeLayout}>{children}</div>;
}
