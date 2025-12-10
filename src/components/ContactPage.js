import React, { useState } from 'react';
import logo from '../assets/Nfts/logo.png';
import bgImage from '../assets/Nfts/img10.png';

// Your API Gateway endpoint (already filled in)
const CONTACT_ENDPOINT =
  "https://1cyxic4f8h.execute-api.us-east-2.amazonaws.com/contact";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #0f0f10;
    color: #f5f2e9;
  }

  .contact-page {
    position: relative;
    display: flex;
    min-height: 100vh;
    background-color: #000000;
    background-image:
      linear-gradient(140deg, rgba(0,0,0,0.9), rgba(0,0,0,0.9)),
      var(--contact-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: normal;
  }

  .contact-page::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 20% 25%, rgba(255, 235, 200, 0.16), transparent 60%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.11), transparent 65%);
    mix-blend-mode: screen;
  }

  .sidebar {
    position: relative;
    z-index: 1;
    width: 280px;
    background: rgba(8, 8, 8, 0.96);
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid rgba(245, 242, 233, 0.08);
    box-shadow: 8px 0 30px rgba(0, 0, 0, 0.6);
  }

  .logo-container {
    margin-bottom: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo-badge {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 0%, #ffffff26, transparent 60%);
    border: 1px solid rgba(245, 242, 233, 0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
  }

  .logo {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    object-fit: contain;
  }

  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .nav-links li {
    margin-bottom: 14px;
  }

  .nav-links a {
    text-decoration: none;
    color: #f5f2e9;
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    display: block;
    padding-bottom: 6px;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s, color 0.3s, opacity 0.3s;
    opacity: 0.85;
  }

  .nav-links a:hover,
  .nav-links a.active {
    border-bottom-color: #f5f2e9;
    opacity: 1;
  }
  
  .sidebar-footer {
    margin-top: auto;
    width: 100%;
  }

  .signature {
    font-size: 12px;
    color: #9b9486;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }

  .signature p {
    margin: 0;
  }

  .signature p:last-child {
    margin-top: 6px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f5f2e9;
  }

  .content-area {
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 50px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(15, 15, 15, 0.86);
    backdrop-filter: blur(8px);
  }

  .content-inner {
    max-width: 900px;
    border-radius: 32px;
    padding: 40px 48px;
    background: radial-gradient(circle at top left, #27241f 0%, #141414 48%, #101010 100%);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
  }

  h1.page-title {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0.25em;
    margin: 0 0 32px 0;
    text-transform: uppercase;
    color: #f5f2e9;
  }

  .info-section {
    margin-bottom: 40px;
  }

  .info-section h2 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 10px;
    color: #c9c3b4;
  }

  .info-section p {
    font-size: 15px;
    line-height: 1.9;
    margin: 0;
    color: #e2dccf;
  }

  .company-name {
    font-size: 18px;
    font-weight: 600;
    color: #f5f2e9;
    display: block;
    margin-bottom: 8px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  
  .contact-form-section {
    margin-top: 24px;
  }

  .contact-form-section h2 {
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 18px;
    letter-spacing: 0.2em;
    color: #c9c3b4;
  }

  .form-group {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
  }

  .form-field {
    flex: 1;
    background-color: transparent;
    border: 1px solid rgba(215, 208, 191, 0.5);
    padding: 12px 15px;
    color: #f5f2e9;
    font-size: 15px;
    font-family: inherit;
    border-radius: 10px;
    transition: border-color 0.25s, box-shadow 0.25s, background-color 0.25s;
  }

  .form-field::placeholder {
    color: #9a9485;
  }

  .form-field:focus {
    outline: none;
    border-color: #f5f2e9;
    box-shadow: 0 0 0 1px rgba(245, 242, 233, 0.4);
    background-color: rgba(15, 15, 15, 0.9);
  }

  textarea.form-field {
    resize: vertical;
    height: 150px;
  }

  .submit-button {
    background: linear-gradient(120deg, #f5f2e9, #d9d0be);
    color: #111111;
    border: none;
    padding: 14px 32px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    font-family: inherit;
    border-radius: 999px;
    font-weight: 600;
  }

  .submit-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.65);
    background: linear-gradient(120deg, #fffaf0, #e9dec9);
  }

  .status-message {
    margin-top: 16px;
    font-size: 14px;
  }

  .status-message.success {
    color: #b6f3c6;
  }

  .status-message.error {
    color: #f5a3a3;
  }

  @media (max-width: 960px) {
    .content-area {
      padding: 40px 24px;
    }

    .content-inner {
      padding: 32px 24px;
      border-radius: 24px 0 0 24px;
    }

    h1.page-title {
      font-size: 32px;
      letter-spacing: 0.18em;
    }
  }

  @media (max-width: 768px) {
    .contact-page {
      flex-direction: column;
    }

    .sidebar {
      width: 100%;
      flex-direction: row;
      align-items: center;
      padding: 20px 18px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }

    .logo-container {
      margin-bottom: 0;
      justify-content: flex-start;
    }

    .nav-links {
      display: none;
    }

    .sidebar-footer {
      margin-top: 0;
      margin-left: auto;
      text-align: right;
    }

    .content-area {
      padding: 32px 18px 40px 18px;
    }

    .content-inner {
      padding: 24px 18px;
      border-radius: 20px;
    }

    .form-group {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send");
      }

      setStatus({ type: "success", text: "Message sent. We’ll get back to you soon." });
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Something went wrong sending your message. Please try again.",
      });
    }
  };

  return (
    <div
      className="contact-page"
      style={{ "--contact-bg": `url(${bgImage})` }}
    >
      <style>{styles}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-badge">
            <img src={logo} alt="Function in Motion Logo" className="logo" />
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/#about">ABOUT</a></li>
          <li><a href="/#roadmap">ROADMAP</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/#insurance">INSURANCE</a></li>
          <li><a href="/#reviews">REVIEWS</a></li>
          <li><a href="/contact" className="active">CONTACT</a></li>
        </ul>
        <div className="sidebar-footer">
          <div className="signature">
            <p>Created by</p>
            <p>Codename: Praying Mantis</p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        <div className="content-inner">
          <h1 className="page-title">Contact</h1>

          <div className="info-section">
            <h2>Information</h2>
            <p>
              <span className="company-name">Function in Motion Physical Therapy PC</span>
              206 E. 163rd St.<br />
              Bronx, NY 10451<br />
              Phone: (718) 942-5133
            </p>
          </div>

          <div className="contact-form-section">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-field"
                  name="firstName"
                  placeholder="FIRST NAME *"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-field"
                  name="lastName"
                  placeholder="LAST NAME *"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-field"
                  name="phone"
                  placeholder="PHONE NUMBER (MANDATORY) *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="form-field"
                  name="email"
                  placeholder="EMAIL ADDRESS *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-field"
                  name="message"
                  placeholder="In a few words describe your current situation. *"
                  style={{ width: "100%" }}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Your Message
              </button>

              {status && (
                <div
                  className={`status-message ${
                    status.type === "success" ? "success" : "error"
                  }`}
                >
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;