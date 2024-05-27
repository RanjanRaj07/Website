import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Modal({ showModal, handleClose, handleRequestOtp }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleRequestOtpClick = () => {
    handleRequestOtp(phoneNumber);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-end z-20 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 mt-14 mr-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sign In</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <CloseIcon />
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
          <button
            onClick={handleRequestOtpClick}
            className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Request OTP
          </button>
          <div className="text-center">
            <span className="text-gray-700">New user? </span>
            <a href="#" className="text-orange-500 hover:underline">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;