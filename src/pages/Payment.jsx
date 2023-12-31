import React, { useEffect, useState } from "react";
import herologo from "../assets/herologo.png";
import SubscriptionToggle from "../components/buttons/SubscriptionToggle/SubscriptionToggle";
import PaymentModal from "../components/PaymentModal";
import DefaultButton from "../components/buttons/Default/DefaultButton";
import greentick from "../assets/tick-circle-green.png";
import SuccessModal from "../components/SuccessModal";
import "../mediaquery.css";

// ViewModel
const usePaymentViewModel = () => {
  const initialPaymentModel = {
    isModalOpen: false,
    showSuccessModal: false,
    windowWidth: window.innerWidth,
  };

  const [paymentModel, setPaymentModel] = useState(initialPaymentModel);

  const openModal = () => {
    setPaymentModel((prevModel) => ({ ...prevModel, isModalOpen: true }));
  };

  const closeModal = (state) => {
    setPaymentModel((prevModel) => ({
      ...prevModel,
      isModalOpen: false,
      showSuccessModal: state,
    }));
  };

  const handleResize = () => {
    setPaymentModel((prevModel) => ({
      ...prevModel,
      windowWidth: window.innerWidth,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDesktop = paymentModel.windowWidth < 1220;

  return {
    paymentModel,
    isDesktop,
    openModal,
    closeModal,
  };
};

// View
const Payment = () => {
  const {
    paymentModel,
    isDesktop,
    openModal,
    closeModal,
  } = usePaymentViewModel();

  return (
    <div className="payment">
      <div className="account-header">
        <img src={herologo} height={40} alt="" />
        <ul>
          <li className="active">1 : Get Started</li>
          <li className="create-active">2 : Create Account</li>
          <li className="account-active">3 : Account Setup</li>
          <li className="payment-active">4 : Payment</li>
        </ul>
      </div>
      <div className="payment-body">
        <h1>Payment Plan</h1>
        <p>We will customize your experience based on your option.</p>
        <div className="check-button">
          <SubscriptionToggle />
        </div>
        <div className="payment-plans">
          <div className="payment-card pro">
            <span className="payment-span pro">Pro</span>
            <div className="price">
              <h1>$19.88</h1>
              <span>/Month</span>
            </div>
            <div className="features">
              <h3>Features:</h3>
              <ul>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>
                      Advanced search for developer profiles with filters.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>Increased monthly messages to developers.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>Priority support.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="but">
              <DefaultButton
                width={isDesktop ? "18rem" : "30rem"}
                fontsize={isDesktop ? "16px" : ""}
                name="Subscribe"
                onClick={openModal}
                width="300px"
              />
            </div>
          </div>
          <div className="payment-card active bussiness">
            <span className="payment-span bussiness">Bussiness Plan</span>
            <div className="price">
              <h1>$19.88</h1>
              <span>/Month</span>
            </div>
            <div className="features">
              <h3>Features:</h3>
              <ul>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>
                      Premium access to developer profiles and advanced search
                      filters.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>Increased monthly messages to developers.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>
                      Dedicated account manager for personalized support.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>Early access to new features and updates.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="but">
              <DefaultButton
                width={isDesktop ? "18rem" : "30rem"}
                fontsize={isDesktop ? "16px" : ""}
                name="Subscribe"
                onClick={openModal}
                width="300px"
              />
            </div>
          </div>
          <div className="payment-card enterprise">
            <span className="payment-span enterprise">Enterprise Plan</span>
            <div className="price">
              <h1>Custom Pricing</h1>
            </div>
            <div className="features">
              <h3>Features:</h3>
              <ul>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>
                      Tailored solutions for large enterprises or agencies.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>
                      Full access to all platform features, including custom
                      integrations.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>Unlimited monthly messages to developers.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={greentick} alt="" />
                    <span>Priority support with 24/7 availability.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="but">
              <DefaultButton
                width={isDesktop ? "270px" : "30rem"}
                fontsize={isDesktop ? "16px" : ""}
                name="Contact Us"
                onClick={openModal}
                width="300px"
                color="#FBDA61"
              />
            </div>
          </div>
        </div>
        <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
        {showSuccessModal && (
          <SuccessModal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
          />
        )}
      </div>
      <div className="account-footer">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
