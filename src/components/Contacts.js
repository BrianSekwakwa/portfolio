import React from "react";

function Contacts() {
  return (
    <div id="contacts" className="contacts">
      <h1 className="contacts__header">Contact</h1>
      <p className="contacts__lead">Get in touch with me</p>
      <p className="contacts__mail">
        <span>email :</span> briansekwakwa@gmail.com
      </p>
      <div className="contacts__links">
        <a
          href="https://github.com/BrianSekwakwa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/brian-sekwakwa-88a45b156/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <p className="contacts__copyright">&copy; Brian Sekwakwa</p>
    </div>
  );
}

export default Contacts;
