// CheckBoxCard.jsx
import  { useState } from 'react';
import './CheckBoxCard.css';
import tick from '../../assets/tick-circle.png';
import team from '../../assets/team.svg';

const CheckBoxCard = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`CheckBoxCard ${isActive ? 'act' : ''}`} onClick={toggleActive}>
      <div className="checkmark">
        {isActive && <img src={tick} alt="" height={15} />}
      </div>
      <img src={team} alt="" className="cardImage" />
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default CheckBoxCard;
