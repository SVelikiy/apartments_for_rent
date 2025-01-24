import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./UpdateModal.module.css";
import { useDispatch } from "react-redux";
import { updateApartment,fetchFilteredApartments } from "../../redux/apartments/operations";

const ApartmentSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short,min 2 letters")
    .max(90, "Too long,max 15 letters")
    .required("This field is required"),
  info: Yup.string()
    .min(2, "Too short,min 2 letters")
    .max(335, "Too long,max 15 letters")
    .required("This field is required"),
  price: Yup.string()
    .min(1, "Too cheap,min 1 dollar")
    .max(10000, "Too much,max 10000 dollar's")
    .required("This field is required"),
  rooms: Yup.string()
    .min(1, "Min 1 room")
    .max(3, "Max 3 rooms")
    .required("This field is required"),
});

export default function UpdateModal({ onClose, apartment, filters }) {
  const apartmentInfo = {
    title: apartment.title,
    info: apartment.info,
    price: apartment.price,
    rooms: apartment.rooms,
  };

  const titleId = nanoid();
  const infoId = nanoid();
  const priceId = nanoid();
  const roomsId = nanoid();

  const dispatch = useDispatch();
    
    const handleUpdate = async (values, actions) => {
        await dispatch(
          updateApartment({ _id: apartment._id, payload: values })
        );
        dispatch(fetchFilteredApartments(filters))
         actions.resetForm();
         onClose();
    }

  return (
    <div>
      <h2>Update apartment</h2>
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
            Update apartment
          </button>
        </Form>
      </Formik>
    </div>
  );
}
