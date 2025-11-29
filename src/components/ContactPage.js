import React from 'react';
import logo from '../assets/Nfts/logo.png'; // Make sure this is a high-resolution image!

const styles = `
  /* Import the Akaya Telivigala font */
  @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');

  /* Main Page Styles */
  body {
    margin: 0;
    font-family: 'Akaya Telivigala', cursive; /* Use the website's font */
    background-color: #2c2c2c;
    color: #e0e0e0;
  }

  .contact-page {
    display: flex;
    min-height: 100vh;
    background-image: url('https://placehold.co/1920x1080/333333/444444?text=Mountain+Background');
    background-size: cover;
    background-position: center;
  }

  /* Sidebar Styles */
  .sidebar {
    width: 250px;
    background-color: #1a1a1a;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid #444;
  }

  .logo-container {
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }
  
  /* Increased logo size */
  .logo {
    width: 150px; /* Increased from 80px */
    height: 150px; /* Increased from 80px */
    border-radius: 50%;
    display: inline-block;
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }

  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .nav-links li {
    margin-bottom: 15px;
  }

  .nav-links a {
    text-decoration: none;
    color: #e0e0e0;
    font-size: 16px; /* Slightly increased font size */
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    padding-bottom: 5px;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s;
  }

  .nav-links a:hover, .nav-links a.active {
    border-bottom-color: #e0e0e0;
  }
  
  .sidebar-footer {
    margin-top: auto;
    width: 100%;
  }

  .signature {
    font-size: 14px; /* Slightly increased font size */
    color: #888;
  }

  /* Content Area Styles */
  .content-area {
    flex: 1;
    padding: 50px 80px;
    background-color: rgba(50, 50, 50, 0.9);
  }

  h1.page-title {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  .info-section {
    margin-bottom: 40px;
  }

  .info-section h2 {
    font-size: 20px; /* Slightly increased font size */
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .info-section p {
    font-size: 16px; /* Slightly increased font size */
    line-height: 1.8; /* Increased line height for better readability */
    margin: 0;
    color: #ccc;
  }

  /* Style for the company name */
  .company-name {
    font-size: 24px; /* Bigger font size */
    font-weight: bold; /* Bolder font weight */
    color: #e0e0e0; /* Brighter color */
    display: block; /* Ensure it's on its own line */
    margin-bottom: 10px; /* Add some space below */
  }
  
  /* Form Styles */
  .contact-form-section h2 {
    font-size: 20px; /* Slightly increased font size */
    text-transform: uppercase;
    margin-bottom: 25px;
  }

  .form-group {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
  }

  .form-field {
    flex: 1;
    background-color: transparent;
    border: 1px solid #777;
    padding: 12px 15px;
    color: #e0e0e0;
    font-size: 16px; /* Slightly increased font size */
    font-family: inherit;
  }

  .form-field::placeholder {
    color: #999;
  }

  .form-field:focus {
    outline: none;
    border-color: #e0e0e0;
  }

  /* Combined textarea styles */
  textarea.form-field {
    resize: vertical;
    height: 150px; /* Increased height */
  }

  .submit-button {
    background-color: #555;
    color: #e0e0e0;
    border: none;
    padding: 15px 30px;
    font-size: 16px; /* Slightly increased font size */
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: inherit; /* Ensure button uses the same font */
  }

  .submit-button:hover {
    background-color: #666;
  }
`;

const ContactPage = () => {
  return (
    <div className="contact-page">
      <style>{styles}</style>
      
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Function in Motion Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#roadmap">ROADMAP</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#insurance">INSURANCE</a></li>
          <li><a href="#reviews">REVIEWS</a></li>
          <li><a href="#contact" className="active">CONTACT</a></li>
        </ul>
        <div className="sidebar-footer">
          <div className="signature">
            <p>CREATED BY:</p>
            <p style={{ fontSize: '20px' }}>Codename: Praying Mantis</p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        <h1 className="page-title">CONTACT</h1>

        <div className="info-section">
          <h2>INFORMATION</h2>
          <p>
            <span className="company-name">Function in Motion Physical Therapy PC</span>
            206 E. 163rd St.<br />
            Bronx, NY 10451<br />
            Phone: (718) 942-5133
          </p>
        </div>

        <div className="contact-form-section">
          <h2>CONTACT FORM</h2>
          <form>
            <div className="form-group">
              <input type="text" className="form-field" placeholder="FIRST NAME *" required />
              <input type="text" className="form-field" placeholder="LAST NAME *" required />
            </div>
            <div className="form-group">
              <input type="tel" className="form-field" placeholder="PHONE NUMBER (MANDATORY) *" required />
              <input type="email" className="form-field" placeholder="EMAIL ADDRESS *" required />
            </div>
            {/* Combined Subject and Message into a single text area */}
            <div className="form-group">
              <textarea 
                className="form-field" 
                placeholder="In a few words describe your current situation. *" 
                style={{ width: '100%' }} 
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">SEND YOUR MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;