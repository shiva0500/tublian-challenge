// Model: Not applicable in the context of a simple React component
// It would be implemented separately if there is complex data logic.

import React, { useEffect, useState } from 'react';
import herologo from '../assets/herologo.png';
import CheckBoxCard from '../components/checkboxs/CheckBoxCard';
import img2 from '../assets/img2.png';
import img1 from '../assets/img1.png';
import img3 from '../assets/img3.png';
import "./AccountSetup.css";
import "../mediaquery.css";
import DefaultButton from '../components/buttons/Default/DefaultButton';
import { useNavigate } from 'react-router-dom';

const AccountSetup = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectedProjects, setSelectedProjects] = useState([]);

    const handleNextClick = () => {
        // ViewModel: Handle navigation logic or other actions
        navigate('/payment');
    };

    const handleProjectSelection = (project) => {
        // ViewModel: Handle project selection logic
        const updatedProjects = [...selectedProjects];
        const index = updatedProjects.indexOf(project);
        if (index !== -1) {
            updatedProjects.splice(index, 1);
        } else {
            updatedProjects.push(project);
        }
        setSelectedProjects(updatedProjects);
    };

    useEffect(() => {
        const handleResize = () => {
            // ViewModel: Handle window resize logic
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isDesktop = windowWidth < 1220;

    return (
        <div className='account-container'>
            {/* View: Display UI */}
            <div className="account-header">
                <img src={herologo} height={40} alt="" />
                <ul>
                    <li className='active'>1 : Get Started</li>
                    <li className='create-active'>2 : Create Account</li>
                    <li className='account-active'>3 : Account Setup</li>
                    <li>4 : Payment</li>
                </ul>
            </div>
            <div className="account-body">
                <h1>How are you planning to use Tublian?</h1>
                <p>We will customize your experience based on your option.</p>
                <div className="usage-cards">
                    {/* View: Render CheckBoxCards */}
                    <CheckBoxCard
                        img={img1}
                        title="Team Projects"
                        desc="Hire developers for team projects."
                        isSelected={selectedProjects.includes('Team')}
                        onSelect={() => handleProjectSelection('Team')}
                    />
                    <CheckBoxCard
                        img={img2}
                        title="Personal Projects"
                        desc="Hire developers for personal projects."
                        isSelected={selectedProjects.includes('Personal')}
                        onSelect={() => handleProjectSelection('Personal')}
                    />
                    <CheckBoxCard
                        img={img3}
                        title="Recruiting"
                        desc="Recruit developers for outstanding companies."
                        isSelected={selectedProjects.includes('Recruiting')}
                        onSelect={() => handleProjectSelection('Recruiting')}
                    />
                </div>
                <br />
                <br />
                <br />
                {/* View: Render DefaultButton */}
                <DefaultButton
                    width={isDesktop ? "20rem" : "30rem"}
                    fontsize={isDesktop ? "16px" : ""}
                    name="Next"
                    onClick={handleNextClick}
                />
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

export default AccountSetup;
