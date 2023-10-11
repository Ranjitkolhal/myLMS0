import React, { useState } from 'react';
import './Contact.css';
import FooterUser from '../../components/user/FooterUser';
import './test.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your Node.js server to handle email sending
    // You can use axios or fetch to make a POST request to your server
  };

  return (
    <>
    <div className='main-contact'>
    <div className="contact-container">
      <div className="map-container">
      <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=930&amp;height=388&amp;hl=en&amp;q=Standard%20Security%20Solutions%20mohol+(Standard%20Security%20Solutions)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <div className='contact-info'>
    <h3>Contact Information</h3>
    <p>Email Address : help@standardsecurity.solutions</p>
    <p>Mobile Number : +91 7620075105</p>
    </div>
    </div>
    <FooterUser/>
    </>
  );
}

export default Contact;
