import css from './Hero.module.css';
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className={css.hero}>
      <div>
        <h1 className={css.title}>Apartments of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
          <NavLink to='/catalog' className={css.button}>
            View Now
          </NavLink>
      </div>
    </div>
  );
};
