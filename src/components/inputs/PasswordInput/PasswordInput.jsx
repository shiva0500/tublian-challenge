import  { useState } from 'react';
import './PasswordInput.css';
import { PiCheckCircleBold, PiEyeSlash, PiEyeLight } from 'react-icons/pi';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [validations, setValidations] = useState({
        minLength: false,
        uppercase: false,
        symbol: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Check validations
        const validationsMet = {
            minLength: newPassword.length >= 8,
            uppercase: /[A-Z]/.test(newPassword),
            symbol: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(newPassword),
        };
        setValidations(validationsMet);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="PasswordInputContainer">
            <div className="PasswordInput">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {showPassword ? (
                    <PiEyeLight color='#888888' onClick={togglePasswordVisibility} size={10} />
                ) : (
                    <PiEyeSlash color='#888888' onClick={togglePasswordVisibility} size={10} />
                )}
            </div>
            <div className="ValidationContainer">
                <div className="ValidationColumn">
                    <div className="ValidationItem">
                        {validations.minLength ? (
                            <PiCheckCircleBold color="#76F368" size={10} />
                        ) : (
                            <PiCheckCircleBold color="#414141" size={10} />
                        )}
                        <span className='noting'>8 characters minimum</span>
                    </div>
                    <div className="ValidationItem">
                        {validations.uppercase ? (
                            <PiCheckCircleBold color="#76F368" size={10} />
                        ) : (
                            <PiCheckCircleBold color="#414141" size={10} />
                        )}
                        <span className='noting'>One uppercase</span>
                    </div>
                </div>
                <div className="ValidationColumn">
                    <div className="ValidationItem">
                        {validations.symbol ? (
                            <PiCheckCircleBold color="#76F368" size={10} />
                        ) : (
                            <PiCheckCircleBold color="#414141" size={10} />
                        )}
                        <span className='noting'>One symbol</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordInput;
