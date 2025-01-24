import css from "./ApartmentItem.module.css";
import BaseModal from "../BaseModal/BaseModal";
import { useState } from "react";
import AddForm from "../AddForm/AddForm";
import DeleteModal from "../DeleteModal/DeleteModal";
import InfoModal from "../InfoModal/InfoModal";

export default function ApartmentItem({ apartment, filters }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteEditClick = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const handleInfoClick = () => {
      setIsInfoModalOpen(true);
    };

    const closeInfoModal = () => {
      setIsInfoModalOpen(false);
    };

  return (
    <div className={css.container}>
      <div className={css.infoContainer}>
        <h2 className={css.title}>{apartment.title}</h2>
        <p className={css.text}>
          <span className={css.textSpan}>Price :</span>
          {apartment.price} USD
        </p>
        <p className={css.text}>
          <span className={css.textSpan}>Rooms : </span> {apartment.rooms}
        </p>
        <p className={css.text}>
          <span className={css.textSpan}>Description : </span>
        </p>
        <div className={css.descriptionText}>{apartment.info}</div>
      </div>
      <div className={css.buttonContainer}>
        <button
          onClick={() => {
            handleInfoClick();
          }}
          className={css.buttonEdit}
          type="button"
        >
          Show more
        </button>
        <button
          className={css.buttonEdit}
          type="button"
          onClick={() => {
            handleEditClick();
          }}
        >
          Edit
        </button>
        <button
          className={css.buttonDelete}
          type="button"
          onClick={() => handleDeleteEditClick()}
        >
          Delete
        </button>
        <BaseModal isOpen={isInfoModalOpen} onClose={closeInfoModal}>
          <InfoModal apartment={apartment} />
        </BaseModal>
        <BaseModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
          <DeleteModal onClose={closeDeleteModal} apartment={apartment} />
        </BaseModal>
        <BaseModal isOpen={isModalOpen} onClose={closeModal}>
          <AddForm
            onClose={closeModal}
            apartment={apartment}
            filters={filters}
          />
        </BaseModal>
      </div>
    </div>
  );
}
