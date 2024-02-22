import { NavLink, Link } from 'react-router-dom';

import clsx from 'clsx';
import style from './AppBar.module.css';
import Title from '../Titile/Title';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export const AppBar = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        <Title />
      </Link>
      <nav className={style.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </nav>
    </header>
  );
};
