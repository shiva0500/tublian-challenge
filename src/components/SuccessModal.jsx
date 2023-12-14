import React from "react";
import "./SuccessModal.css";
import success from "../assets/sucess.png";
import DefaultButton from "./buttons/Default/DefaultButton";

const SuccessModal = ({ isOpen, onClose }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} style={modalStyle}>
      <div className="success-modal">
        <img src={success} alt="success" />
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully.</p>
        <DefaultButton
          name="Proceed"
          width="13rem"
          fontsize="13px"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default SuccessModal;
