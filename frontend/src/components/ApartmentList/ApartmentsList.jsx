import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFilteredApartments } from "../../redux/apartments/operations";
import ApartmentItem from "../ApartmentItem/ApartmentItem";
import {
  selectApartments,
  selectLoading,
} from "../../redux/apartments/selectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ApartmentList.module.css";
import { Hourglass } from "react-loader-spinner";

const FilterSchema = Yup.object().shape({
  maxPrice: Yup.string()
    .min(1, "Too cheap,min 1 dollar")
    .max(10000, "Too much,max 10000 dollar's"),
  minPrice: Yup.string()
    .min(1, "Too cheap,min 1 dollar")
    .max(10000, "Too much,max 10000 dollar's"),
  maxRooms: Yup.string().min(1, "Min 1 room").max(3, "Max 3 rooms"),
  minRooms: Yup.string().min(1, "Min 1 room").max(3, "Max 3 rooms"),
});

export default function CamperList() {
  const apartmentFilter = {
    maxPrice: "",
    minPrice: "",
    maxRooms: "",
    minRooms: "",
  };

  const maxPriceId = nanoid();
  const minPriceId = nanoid();
  const maxRoomsId = nanoid();
  const minRoomsId = nanoid();

  const [filters, setFilters] = useState({
    page: 1,
    perPage: 10,
    sortOrder: "asc",
    sortBy: "price",
    maxPrice: "",
    minPrice: "",
    maxRooms: "",
    minRooms: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilteredApartments(filters));
  }, [dispatch, filters]);

  const apartments = useSelector(selectApartments);
  const loading = useSelector(selectLoading);

  function handleSubmit(values, actions) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filter: {
        ...prevFilters.filter,
        maxPrice: values.maxPrice || "",
        minPrice: values.minPrice || "",
        maxRooms: values.maxRooms || "",
        minRooms: values.minRooms || "",
      },
    }));
    setTimeout(() => actions.resetForm(), 0);
  }

  function handleCancel() {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filter: {
        ...prevFilters.filter,
        maxPrice: "",
        minPrice: "",
        maxRooms: "",
        minRooms: "",
      },
    }));
  }

  function handleLoad() {
    setFilters((prevFilters) => ({
      ...prevFilters,
      perPage: prevFilters.perPage + 10,
    }));
  }

  return (
    <div className={css.containerAll}>
      <div className={css.formContainer}>
        <Formik
          initialValues={apartmentFilter}
          onSubmit={handleSubmit}
          validationSchema={FilterSchema}
        >
          <Form className={css.form}>
            <div className={css.inputContainer}>
              <label htmlFor={maxPriceId}>MAX Price</label>
              <Field
                type="text"
                name="maxPrice"
                id={maxPriceId}
                className={css.input}
              />
              <ErrorMessage
                name="maxPrice"
                component="span"
                className={css.errMessageMINPrice}
              />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor={minPriceId}>MIN Price</label>
              <Field
                type="text"
                name="minPrice"
                id={minPriceId}
                className={css.input}
              />
              <ErrorMessage
                name="minPrice"
                component="span"
                className={css.errMessageMINPrice}
              />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor={maxRoomsId}>MAX Rooms</label>
              <Field
                type="text"
                name="maxRooms"
                id={maxRoomsId}
                className={css.input}
              />
              <ErrorMessage
                name="maxRooms"
                component="span"
                className={css.errMessageMAXRooms}
              />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor={minRoomsId}>MIN Rooms</label>
              <Field
                type="text"
                name="minRooms"
                id={minRoomsId}
                className={css.input}
              />
              <ErrorMessage
                name="minRooms"
                component="span"
                className={css.errMessageMINRooms}
              />
            </div>
            <button type="submit" className={css.button}>
              Filter apartment
            </button>
          </Form>
        </Formik>
        <button
          type="button"
          className={css.cancelButton}
          onClick={() => {
            handleCancel();
          }}
        >
          Cancel filters
        </button>
      </div>
      <ul className={css.container}>
        {apartments.map((apartment) => {
          return (
            <li key={apartment._id}>
              <ApartmentItem apartment={apartment} filters={filters} />
            </li>
          );
        })}
      </ul>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          handleLoad();
        }}
      >
        Load more
      </button>
      {loading && (
        <div className={css.spiner}>
          <Hourglass />
        </div>
      )}
    </div>
  );
}
