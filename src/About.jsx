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


// import React, { useState } from "react";
// import Contact from "./Contact";

// const About = () => {
//   const [name, setName] = useState("");
//   const [submitted,setSubmitted]=useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(name);
//     console.log("Submitted name:", name);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <Contact data={submitted} />
//     </>
//   );
// };

// export default About;



// import React, { useState } from "react";

// const About=()=>{
//   const [count,setCount]=useState(0);
//   const handleIncrement=()=>{
//     setCount(prevCount=>prevCount+1);
//   }
//   const handleDecrement=()=>{
//     setCount(prevCount=>prevCount-1);
//   }
//   return(
//     <div>
//       <h1 onClick={handleIncrement}>+</h1>count:{count}<h1 onClick={handleDecrement}>-</h1>
//     </div>
//   )
// }

// export default About;