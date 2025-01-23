import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { fetchAllApartments } from "../../redux/apartments/operations";
import ApartmentItem from "../ApartmentItem/ApartmentItem";
import { selectApartments } from "../../redux/apartments/selectors";
import css from './ApartmentList.module.css'

export default function CamperList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllApartments());
  }, [dispatch]);

    const apartments = useSelector(selectApartments);

  return (
    <div>
      <ul className={css.container}>
        {apartments.map((apartment) => {
          return (
            <li key={apartment._id}>
              <ApartmentItem apartment={apartment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
