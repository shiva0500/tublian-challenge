import  { useState } from 'react';
import './CheckBoxCard.css';
import tick from '../../assets/tick-circle.png';
import team from '../../assets/team.svg';


const CheckBoxCard = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`CheckBoxCard ${isActive ? 'act' : ''}`} onClick={toggleActive}>
            <div className="checkmark">
                {isActive && <img src={tick} alt="" height={15} />}
            </div>
            <img src={team}  alt="" />
            <h1 className="title">Team Projects</h1>
            <p className="description">Hire developers for team projects.</p>
        </div>
    );
};

export default CheckBoxCard;
