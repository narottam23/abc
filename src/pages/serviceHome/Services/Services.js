import React from "react";
import Select from "react-select";
import "./Services.css";
const Services = () => {
  const options = [
    { value: "SPA", label: "Spa" },
    { value: "NAIL", label: "Nail" },
    { value: "MAKEUP", label: "Makeup" },
    { value: "Hair", label: "Hair" },
    { value: "BEAUTY", label: "Beauty" },
    { value: "HAND & FEET", label: "Hand & Feet" },
  ];
  return (
    <div className="selectbox" style={{ border: "2px solid red" }}>
      <Select options={options} />
    </div>
  );
};

export default Services;
