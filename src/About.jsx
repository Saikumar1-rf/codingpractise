import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location=useLocation();
  const {firstName,lastName,gender}=location.state || {};

  return (
    <>
     <div className="p-6 flex">
      <h1>First Name: {firstName}</h1>
      <h1>Last Name: {lastName}</h1>
      <h1>Gender: {gender}</h1>
    </div>
    <div>

    </div>
    </>
   
  );
};

export default About;
