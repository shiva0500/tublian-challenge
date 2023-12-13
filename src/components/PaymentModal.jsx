import React, { useState } from 'react';
import './PaymentModal.css';
import closeImg from '../assets/close.png';
import herologo from '../assets/herologo.png';
import googleicon from '../assets/googleicon.svg';
import Input from '../components/inputs/Input/Input';
import EmailInput from '../components/inputs/Input/EmailInput';
import CardInput from './inputs/Input/CardInput.jsx';
import Button from './buttons/Default/Button.jsx';
import SuccessModal from './SuccessModal'; // Import the SuccessModal component

const PaymentModal = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handlePay = () => {
        onClose(true);
    };

    const modalStyle = {
        display: isOpen ? 'block' : 'none'
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`} style={modalStyle}>
            <div className="modal">
                <div className="header">
                    <img src={herologo} height={20} alt="" />
                    <img style={{ cursor: 'pointer' }} alt="close" width={20} src={closeImg} onClick={onClose} />
                </div>
                <div className="payment-plan">
                    <div className="plan-details">
                        <h4>Mothly Plan</h4>
                        <h6 onClick={onClose}>Change plan</h6>
                    </div>
                    <hr />
                    <div className="plan">
                        <div className="title">
                            <span className="payment-span-pro">Business</span>
                        </div>
                        <div className="price">
                            <p>Total:</p>
                            <div>
                                <span className='currency'>USD</span>
                                <span className="planprice">$49.99</span>
                                <span className="duration">/Month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment-info">
                    <div className="payment-method">
                        <h3>Payment Method</h3>
                        <p>Choose how you’d like to pay.</p>
                        <label className="payment-checkbox">
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}
                            />
                            &nbsp; &nbsp;
                            Credit Card
                        </label>
                        <label className="payment-checkbox">
                            <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}
                            /> &nbsp; &nbsp;
                            <img src={googleicon} alt="" />Pay
                        </label>
                        <div className="checks">
                        </div>
                    </div>
                    <div className="user-payment-details">
                        <h3>Payment Details</h3>
                        <EmailInput name="Email" width="28rem" fontsize="15px" /><br />
                        <Input name="Card Holder" width="28rem" type="text" fontsize="15px" /><br />
                        <CardInput name="Card Number" width="28rem" type="number" fontsize="15px" /><br />
                        <div className="expiry">
                            <Input name="MM-YY" width="13rem" type="number" fontsize="15px" />
                            <Input name="CVC" width="13rem" type="number" fontsize="15px" />
                        </div><br />
                        <Input name="Country" width="28rem" type="text" fontsize="15px" /><br />
                        <p style={{ fontSize: '13px' }}>By clicking below, you agree to our Terms, Privacy Policy and Automatic Renewal.
                            Tublian will charge you $49.99 (plus Tax) each month until you cancel you
                            subscription in account settings.</p>
                        <br />
                        <Button name="Pay $49.99" width="28rem" fontsize="11px" onClick={handlePay} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
