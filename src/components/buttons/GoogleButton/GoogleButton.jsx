import React from "react";
import googleIcon from "../../../assets/googleicon.svg";
import "./GoogleButton.css";

const GoogleButton = (props) => {
  const isContactUs = props.name && props.name.toLowerCase() === "contact us";

  const buttonStyle = {
    backgroundColor: isContactUs ? "black" : "transparent",
    color: isContactUs ? "white" : "#121212",
    border: isContactUs ? "1px solid #EA4335" : "none",
    borderRadius: isContactUs ? "50em" : "0",
  };

  return (
    <button
      className="GoogleButton"
      style={buttonStyle}
      onMouseEnter={() =>
        isContactUs
          ? null
          : (event.target.style = {
              backgroundColor: "#FBDA61",
              color: "#FF5ACD",
            })
      }
      onMouseLeave={() => (isContactUs ? null : (event.target.style = {}))}>
      {!isContactUs && <img src={googleIcon} alt="googleicon" height={20} />}
      &nbsp;
      {props.name}
    </button>
  );
};

export default GoogleButton;
