import React from "react";

function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contacts__header">Contact</h1>
      <p className="contacts__lead">Get in touch with me</p>
      <p className="contacts__mail">
        <span>Email:</span> briansekwakwa@gmail.com
      </p>
      <div className="contacts__icons">some icons over here</div>
      <p className="contacts__copyright">&copy; Brian Sekwakwa</p>
    </div>
  );
}

export default Contacts;
