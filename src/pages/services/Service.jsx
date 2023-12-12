// Service.jsx
import CheckBoxCard from "../../components/checkboxs/CheckBoxCard";
import "./service.css";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="container_head">
          <p className="service_head">How are you planning to use Tublian?</p>
          <p className="service_subhead">
            We will customize your experience based on your option.
          </p>
        </div>

        <div className="checkBoxContainer">
          <CheckBoxCard title="Team Projects" description="Hire developers for team projects." />
          <CheckBoxCard title="Another Title" description="Another description." />
          <CheckBoxCard title="Yet Another Title" description="Yet another description." />
        </div>

        <button className="service_btn">Next</button>

        <div className="container_footer">
          <p className="service_footer1">Privacy Policy</p>
          <p className="service_footer1">Terms</p>
        </div>
      </div>
    </>
  );
};

export default Service;
