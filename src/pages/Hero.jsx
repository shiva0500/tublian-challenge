import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import herologo from "../assets/herologo.png";
import "./Hero.css";
import "../mediaquery.css";
import Input from "../components/inputs/Input/Input";
import DefaultButton from "../components/buttons/Default/DefaultButton";
import { useNavigate } from "react-router-dom";

// Model
const initialUserModel = {
  firstName: "",
  lastName: "",
};

// ViewModel
const useHeroViewModel = (initialModel) => {
  const [model, updateModel] = useState(initialModel);

  const handleFirstNameChange = (value) => {
    updateModel({ ...model, firstName: value });
  };

  const handleLastNameChange = (value) => {
    updateModel({ ...model, lastName: value });
  };

  const handleProceedClick = () => {
    navigate("/create", { state: model });
  };

  return {
    model,
    handleFirstNameChange,
    handleLastNameChange,
    handleProceedClick,
  };
};

// View
const Hero = () => {
  const navigate = useNavigate();
  const { model, handleFirstNameChange, handleLastNameChange, handleProceedClick } = useHeroViewModel(initialUserModel);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDesktop = windowWidth < 1220;

  return (
    <div className="hero">
      <div className="hero-left">
        <img src={hero} alt="Hero" />
      </div>
      <div className="hero-right">
        <div className="hero-right-header">
          <img src={herologo} height={40} alt="" />
          <ul>
            <li className="active">1 : Get Started</li>
            <li>2 : Create Account</li>
            <li>3 : Account Setup</li>
            <li>4 : Payment</li>
          </ul>
        </div>
        <div className="hero-right-body">
          <h1>Get Started</h1>
          <p>Start recruiting streetcred developers, Today!!</p>
          <br />
          <div className="inps">
            <Input
              width={isDesktop ? "22rem" : "30rem"}
              fontsize={isDesktop ? "16px" : ""}
              name="First Name"
              onChange={handleFirstNameChange}
            />
            <br />
            <br />
            <Input
              width={isDesktop ? "22rem" : "30rem"}
              fontsize={isDesktop ? "16px" : ""}
              name="Last Name"
              onChange={handleLastNameChange}
            />
            <br />
            <br />
            <DefaultButton
              width={isDesktop ? "22rem" : "30rem"}
              fontsize={isDesktop ? "16px" : ""}
              name="Proceed"
              onClick={handleProceedClick}
            />
          </div>
          <p style={{ color: "#696969", marginTop: "10px" }}>
            Already have an account&nbsp;? &nbsp;
            <a
              style={{
                color: "white",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              href="#">
              Login
            </a>
          </p>
        </div>
        <div className="hero-right-footer">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
