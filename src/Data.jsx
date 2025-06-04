import React, { useState } from 'react';
import Home from './Home';

const Data = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({
    joiningdate: "",
    name: "",
    exitdate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["firstName", "lastName", "gender"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const handleEditClick = () => {
    setIsDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsDisabled(true);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Submitted data", details);
  };

  return (
    <div>
      <Home 
        handleSave={handleSave} 
        handleClick={handleClick} 
        handleSubmit={handleSubmit} 
        handleEditClick={handleEditClick} 
        handleChange={handleChange} 
        data={details} 
        open={open} 
        setOpen={setOpen}
        isDisabled={isDisabled} 
        formData={formData}
      />
    </div>
  );
};

export default Data;