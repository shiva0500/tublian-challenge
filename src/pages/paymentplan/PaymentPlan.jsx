import "./PaymentPlan.css";
const PaymentPlan = () => {
  return (
    <div className="payment-plan-container">
      <div className="header-section">
        <p className="section-title">Payment Plan</p>
        <p className="section-description">
          We will customize your experience based on your option.
        </p>
      </div>

      <div className="payment-options">
        <div className="monthly-option">
          <p className="Moption-title">Monthly</p>
        </div>

        <div className="annually-option">
          <p className="Aoption-title">Annually</p>
          <p className="option-discount">20% Off</p>
        </div>
      </div>

      <div className="frames">
        <div className="frame">
          <div className="div-wrapper">
            <div className="div">Pro</div>
          </div>
          <p className="element-month">
            <span className="span">$19.99</span>
            <span className="text-wrapper-2">/Month</span>
          </p>
          <div className="text-wrapper-3">Features:</div>

          <div className="f1">
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="#76F368"
                />
              </svg>
              < p className="f1_p"> Advanced search for developer profiles with filters.</p>
            </div>
          </div>
        </div>
        <div className="frame">
          <div className="div-wrapper">
            <div className="div">Pro</div>
          </div>
          <p className="element-month">
            <span className="span">$19.99</span>
            <span className="text-wrapper-2">/Month</span>
          </p>
          <div className="text-wrapper-3">Features:</div>
        </div>
        <div className="frame">
          <div className="div-wrapper">
            <div className="div">Pro</div>
          </div>
          <p className="element-month">
            <span className="span">$19.99</span>
            <span className="text-wrapper-2">/Month</span>
          </p>
          <div className="text-wrapper-3">Features:</div>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-link">Privacy Policy</div>
        <div className="footer-link">Terms</div>
      </div>
    </div>
  );
};

export default PaymentPlan;
