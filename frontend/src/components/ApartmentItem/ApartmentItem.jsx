import css from "./ApartmentItem.module.css";
import { useDispatch } from "react-redux";
import { deleteApartment } from "../../redux/apartments/operations";
import { fetchAllApartments } from "../../redux/apartments/operations";

export default function ApartmentItem({ apartment }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteApartment(id));
    dispatch(fetchAllApartments());
  };

  return (
    <div className={css.container}>
      <div>
        <img src={apartment.photo} alt="Photo1" />
      </div>
      <div className={css.infoContainer}>
        <h2 className={css.title}>{apartment.title}</h2>
        <p className={css.text}>
          <span className={css.textSpan}>Price : </span>
          {apartment.price} USD
        </p>
        <p className={css.text}>
          <span className={css.textSpan}>Rooms : </span> {apartment.rooms}
        </p>
        <p className={css.text}>
          <span className={css.textSpan}>Description : </span>{" "}
          <div className={css.descriptionText}>{apartment.info}</div>
        </p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.buttonEdit} type="button">
          Show more
        </button>
        <button className={css.buttonEdit} type="button">
          Edit
        </button>
        <button
          className={css.buttonDelete}
          type="button"
          onClick={() => handleDelete(apartment._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
