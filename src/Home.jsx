import React, { useState } from "react";
import Popup from "./Popup";

 const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setDetails((prev)=>({
      ...prev,
      [name]:value,
    }))
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

  const handleSave=(e)=>{
    e.preventDefault();
    console.log("submitted data",details);
  }

  const [details,setDetails]=useState({
    joiningdate:"",
    name:"",
    exitdate:"",
  });

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
            User Information
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
                disabled={isDisabled}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
                disabled={isDisabled}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Gender
              </label>
              <select
                id="gender"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.gender}
                name="gender"
                onChange={handleChange}
                disabled={isDisabled}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex justify-between gap-2">
              {isDisabled ? (
                <button
                  type="button"
                  className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                  Save
                </button>
              )}

              <button
                type="button"
                className="w-1/2 bg-red-500 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                onClick={handleClick}
              >
                ONLINE
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="p-4">
        <form onSubmit={handleSave}>
<div className="bg-white p-4 rounded-xl shadow-md flex flex-wrap gap-4 items-end">
          <div className="flex flex-col">
            <label
              htmlFor="joiningDate"
              className="mb-1 font-medium text-gray-700"
            >
              Joining Date
            </label>
            <input
              id="joiningDate"
              type="date"
              name="joiningdate"
              value={details.joiningdate}
              onClick={handleChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={details.name}
              placeholder="Enter name"
              onClick={handleChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="exitDate"
              className="mb-1 font-medium text-gray-700"
            >
              Date of Exit
            </label>
            <input
              id="exitDate"
              type="date"
              value={details.exitdate}
              name="dateofexit"
              onClick={handleChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <button
            type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              BIG BUCKET
            </button>
          </div>
        </div>
        </form>
        
      </div>

      {open && <Popup onClose={() => setOpen(false)} />}
    </>
  );
};

export default Home;
