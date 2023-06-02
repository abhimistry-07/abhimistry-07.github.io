import React from "react";

function Contact() {
  return (
    <div id="contact">
      <p>
        Github:{" "}
        <a href="https://github.com/abhimistry-07" id="contact-github">
          {" "}
          abhimistry-07
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/abhishek-mistry-3b0953202/"
          id="contact-linkedin"
        >
          {" "}
          Abhishek Mistry{" "}
        </a>
      </p>
      <p id="contact-phone">Phone number: +91 9512098900</p>
      <p id="contact-email">Email: mistryabhishek2000@gmail.com</p>
    </div>
  );
}

export default Contact;

// GitHub profile link : id="contact-github"
// LinkedIn profile link : id="contact-linkedin"
// Phone number : id="contact-phone"
// Email address : id="contact-email"
