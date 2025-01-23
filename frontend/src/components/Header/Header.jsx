import css from './header.module.css'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        RENT <span className={css.logoSpan}>APP</span>
      </p>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.navLink}>
          Catalog
        </NavLink>
        <NavLink to="/" className={css.navLink}>
          Rent apartment
        </NavLink>
      </nav>
    </header>
  );
}
