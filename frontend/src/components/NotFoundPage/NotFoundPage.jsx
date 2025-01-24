import { NavLink } from "react-router-dom";
import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Error! Page not found!</h2>
      <NavLink className={css.button} to="/">Home</NavLink>
    </div>
  );
}
