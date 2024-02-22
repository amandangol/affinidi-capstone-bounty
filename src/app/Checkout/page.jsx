"use client"; 

import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './CheckoutPage.css';

const Checkout = () => {
  const { profile } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [userData, setUserData] = useState({
    firstName: profile?.givenName || '',
    lastName: profile?.familyName || '', 
    email: profile?.email || '',
    phone: profile?.phoneNumber || '', 
    address: profile?.streetAddress || '', 
    postalCode: profile?.postalCode || '',
    city: profile?.locality || '', 
    country: profile?.country || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setOpen(true);
  };


  const closeModal = () => {
    setOpen(false);
    window.location.href = '/';
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="CheckoutContainer">
      <div className="Checkout">
        <h2 className="CheckoutTitle">Checkout Order</h2>
        <form onSubmit={handleSubmit} className="CheckoutForm">
          <div className="FormGroup">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName"
              value={userData.firstName} 
              onChange={handleChange}
            />
          </div>
          <div className="FormGroup">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName"
              value={userData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="FormGroup">
  <label htmlFor="email">Email</label>
  <input 
    type="email" 
    name="email" 
    id="email"
    value={userData.email} 
    onChange={handleChange} 
    required 
  />
</div>

<div className="FormGroup">
  <label htmlFor="phone">Phone Number</label>
  <input 
    type="text" 
    name="phone" 
    id="phone"
    value={userData.phone} 
    onChange={handleChange} 
    required 
  />
</div>

<div className="FormGroup">
  <label htmlFor="address">Address</label>
  <input 
    type="text" 
    name="address" 
    id="address"
    value={userData.address} 
    onChange={handleChange} 
    required 
  />
</div>

<div className="FormGroup">
  <label htmlFor="postalCode">Postal Code</label>
  <input 
    type="text" 
    name="postalCode" 
    id="postalCode"
    value={userData.postalCode} 
    onChange={handleChange} 
    required 
  />
</div>

<div className="FormGroup">
  <label htmlFor="city">City</label>
  <input 
    type="text" 
    name="city" 
    id="city"
    value={userData.city} 
    onChange={handleChange} 
    required 
  />
</div>

<div className="FormGroup">
  <label htmlFor="country">Country</label>
  <input 
    type="text" 
    name="country" 
    id="country"
    value={userData.country} 
    onChange={handleChange} 
    required 
  />
</div>

          <button type="submit" className="ContinueButton">Submit Order</button>
        </form>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
          <Box sx={style} className="ModalContent">
            <div className="ModalMessage">Your order has been placed successfully. Thanks for choosing us! 🛍️</div>
            <button onClick={closeModal} className="OKButton">OK</button>
          </Box>
        </Modal>
    </div>
  );
};

export default Checkout;
