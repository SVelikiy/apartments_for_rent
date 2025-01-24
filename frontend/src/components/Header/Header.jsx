import css from './header.module.css'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={css.header}>
      <NavLink to='/' className={css.logo}>
        RENT <span className={css.logoSpan}>APP</span>
      </NavLink>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.navLink}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
