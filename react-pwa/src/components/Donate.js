// src/components/Donation.js

import React, { useState } from 'react';
// import PaymentForm from './PaymentForm'; // Import the PaymentForm component

function Donation() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleDonation = async (e) => {
    e.preventDefault();
    setMessage(`Thank you for your donation of $${amount}!`);
  };

  return (
    <div>
      <h1>Make a Donation</h1>
      <a href="https://paystack.com/pay/dressascholar">Pay with PayStack</a>
      <br />
      {/* <button type="submit" onClick={handleDonation}>
        Donate
      </button> */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Donation;
