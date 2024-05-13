import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, closeModal, studentDetails }) => {

    const logConsole =(msg,data) =>{
        console.log(msg, data);
    }
  const [formData, setFormData] = useState(studentDetails);
  logConsole("student on Edit componet ", studentDetails)
  logConsole("formData on Edit componet ", formData)

  useEffect(() => {
    setFormData(studentDetails);
  }, [studentDetails]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.put(`http://localhost:3000/update/${formData._id}`, formData);
        closeModal();
        console.log("madrchod",response.data)
        if (response.data.success) {
            // Close the modal after successful update
            // Optionally, you can perform any additional actions here, such as refreshing the data
        } else {
            // Handle any validation errors or other errors returned by the server
            console.error("hello"+response.data.message);
        }
    } catch (error) {
        console.error('Error updating student:', error);
    }
};



  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={closeModal}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h1 className="text-2xl font-bold text-center mb-8">Edit Student Details</h1>
              <label className="block mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="Name"
                  
                />
              </label>
              <label className="block mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="Email"
                 
                />
              </label>
              <label className="block mb-4">
                <input
                  type="text"
                  name="Qualification"
                  value={formData.Qualification}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="Qualification"
                 
                />
              </label>
              <label className="block mb-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="Phone No."
                 
                />
              </label>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#11256d] text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Update
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
