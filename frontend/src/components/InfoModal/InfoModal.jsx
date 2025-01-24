import css from "./InfoModal.module.css";

export default function InfoModal({ apartment }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{apartment.title}</h2>
      <p className={css.text}>
        <span className={css.textSpan}>Price : </span>
        {apartment.price}$
      </p>
      <p className={css.text}>
        <span className={css.textSpan}>Rooms : </span>
        {apartment.rooms}
      </p>
      <p className={css.text}>
        <span className={css.textSpan}>Description : </span>
        {apartment.info}
      </p>
    </div>
  );
}
