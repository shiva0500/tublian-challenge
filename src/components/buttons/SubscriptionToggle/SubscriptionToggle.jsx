import React, { useState } from "react";
import "./SubscriptionToggle.css";

const SubscriptionToggle = () => {
  const [isMonthlyActive, setIsMonthlyActive] = useState(true);

  const handleMonthlyClick = () => {
    setIsMonthlyActive(true);
  };

  const handleAnnualClick = () => {
    setIsMonthlyActive(false);
  };

  return (
    <div className="SubscriptionToggle">
      <button
        className={isMonthlyActive ? "monthly-option active" : "monthly-option"}
        onClick={handleMonthlyClick}>
        Monthly
      </button>
      <button
        className={!isMonthlyActive ? "annual-option active" : "annual-option"}
        onClick={handleAnnualClick}>
        Annually <span>20% off</span>
      </button>
    </div>
  );
};

export default SubscriptionToggle;
