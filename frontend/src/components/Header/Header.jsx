import css from './header.module.css'

export default function Header() {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        RENT <span className={css.logoSpan}>APP</span>
      </p>
      <nav className={css.navigation}>
        <a className={css.navLink}>Home</a>
        <a className={css.navLink}>Catalog</a>
        <a className={css.navLink}>Rent apartment</a>
      </nav>
    </header>
  );
}
