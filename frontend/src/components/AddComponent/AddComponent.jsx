import BaseModal from "../BaseModal/BaseModal";
import AddForm from "../AddForm/AddForm";
import { useState } from "react";
import css from "./AddComponent.module.css";

export default function AddComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className={css.button} type="button" onClick={handleEditClick}>
        + Add Apartment
      </button>
      <BaseModal isOpen={isModalOpen} onClose={closeModal}>
        <AddForm onClose={closeModal} />
      </BaseModal>
    </div>
  );
}
