import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./AddForm.module.css";
import { useDispatch } from "react-redux";
import {
  addApartment,
  updateApartment,
  fetchFilteredApartments,
} from "../../redux/apartments/operations";

const ApartmentSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short, minimum 2 characters")
    .max(90, "Too long, maximum 90 characters")
    .required("This field is required"),
  info: Yup.string()
    .min(2, "Too short, minimum 2 characters")
    .max(335, "Too long, maximum 335 characters")
    .required("This field is required"),
  price: Yup.number()
    .min(1, "Too cheap, minimum $1")
    .max(10000, "Too expensive, maximum $10,000")
    .required("This field is required"),
  rooms: Yup.number()
    .min(1, "Minimum 1 room")
    .max(3, "Maximum 3 rooms")
    .required("This field is required"),
});

export default function AddForm({ onClose, apartment = {}, filters = {} }) {
  const apartmentInfo = {
    title: apartment.title || "",
    info: apartment.info || "",
    price: apartment.price || "",
    rooms: apartment.rooms || "",
  };

  const titleId = nanoid();
  const infoId = nanoid();
  const priceId = nanoid();
  const roomsId = nanoid();

  const dispatch = useDispatch();

  const handleUpdate = async (values, actions) => {
    if (Object.keys(apartment).length === 0) {
      dispatch(
        addApartment({
          title: values.title,
          info: values.info,
          price: values.price,
          rooms: values.rooms,
        })
      );
      actions.resetForm();
      onClose();
      return;
    }
    await dispatch(updateApartment({ _id: apartment._id, payload: values }));
    dispatch(fetchFilteredApartments(filters));
    actions.resetForm();
    onClose();
  };

  return (
    <div>
      <Formik
        initialValues={apartmentInfo}
        onSubmit={handleUpdate}
        validationSchema={ApartmentSchema}
      >
        <Form className={css.form}>
          <label htmlFor={titleId}>Title</label>
          <Field type="text" name="title" id={titleId} className={css.input} />
          <ErrorMessage
            name="title"
            component="span"
            className={css.errMessageTitle}
          />
          <label htmlFor={infoId}>Info</label>
          <Field type="text" name="info" id={infoId} className={css.input} />
          <ErrorMessage
            name="info"
            component="span"
            className={css.errMessageInfo}
          />
          <label htmlFor={priceId}>Price</label>
          <Field type="text" name="price" id={priceId} className={css.input} />
          <ErrorMessage
            name="price"
            component="span"
            className={css.errMessagePrice}
          />
          <label htmlFor={roomsId}>Rooms</label>
          <Field type="text" name="rooms" id={roomsId} className={css.input} />
          <ErrorMessage
            name="rooms"
            component="span"
            className={css.errMessageRooms}
          />
          <button type="submit" className={css.button}>
            {Object.keys(apartment).length === 0
              ? "Add apartment"
              : "Update apartment"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
