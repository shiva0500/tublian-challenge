import React, { useState, useEffect } from "react";
import "./SuccessModal.css";
import success from "../assets/sucess.png";
import DefaultButton from "./buttons/Default/DefaultButton";

// Model
const initialSuccessModel = {
  isOpen: false,
};

// ViewModel
const useSuccessViewModel = () => {
  const [successModel, setSuccessModel] = useState(initialSuccessModel);

  const openModal = () => {
    setSuccessModel((prevModel) => ({ ...prevModel, isOpen: true }));
  };

  const closeModal = () => {
    setSuccessModel((prevModel) => ({ ...prevModel, isOpen: false }));
  };

  useEffect(() => {
    if (successModel.isOpen) {
      // Additional logic can be added on modal open
    }
  }, [successModel.isOpen]);

  return {
    successModel,
    openModal,
    closeModal,
  };
};

// View
const SuccessModal = () => {
  const { successModel, openModal, closeModal } = useSuccessViewModel();

  const modalStyle = {
    display: successModel.isOpen ? "block" : "none",
  };

  return (
    <div className={`modal-overlay ${successModel.isOpen ? "show" : ""}`} style={modalStyle}>
      <div className="success-modal">
        <img src={success} alt="success" />
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully.</p>
        <DefaultButton
          name="Proceed"
          width="13rem"
          fontsize="13px"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default SuccessModal;
