import React from "react";

import "./contact-form.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form method="POST" action="#" className="contact-form">
        <div className="row">
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="find-us">
            How did you find us?
            <select name="find-us" id="find-us" defaultValue="friends">
              <option value="friends">Friends</option>
              <option value="search">Search Engine</option>
              <option value="ads">Advertisement</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className="row">
          <label htmlFor="message">
            Drop us a line
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
            ></textarea>
          </label>
        </div>

        <div className="row">
          <label>
            &nbsp;
            <input type="submit" value="Send" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
