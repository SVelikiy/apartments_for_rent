import { deleteApartment } from "../../redux/apartments/operations";
import { useDispatch } from "react-redux";
import css from "./DeleteModal.module.css";

export default function DeleteModal({ onClose, apartment }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteApartment(id));
    onClose();
  };

  return (
    <div className={css.container}>
      <h2>Are you sure delete {apartment.title}?</h2>
      <div className={css.buttonContainer}>
        <button
          className={css.buttonCancel}
          type="button"
          onClick={() => onClose()}
        >
          Cancel
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
