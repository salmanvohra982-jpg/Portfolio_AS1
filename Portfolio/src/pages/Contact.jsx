import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // Captures input
    navigate("/"); // Redirects back to Home page
  };

  return (
    <div>

      {/* Contact Info Panel */}
      <div>
        <h3>My Contact Information</h3>
        <p>Email: <a href="mailto:salmanvohra982@gmail.com">salmanvohra982@gmail.com</a></p>
        <p>Phone: +1 (437) 226-9280</p>
        <p>Location: Pickering, ON, Canada | L1W3A6</p>
      </div>

      <br />

     <h2>Contact Me</h2>
      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Phone Number:</label><br />
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Email Address:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Message:</label><br />
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;