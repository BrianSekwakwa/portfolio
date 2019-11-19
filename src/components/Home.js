import React from "react";

function Home() {
  return (
    <div id="home" className="home">
      <h1>BRIAN SEKWAKWA</h1>
      <p>DEVELOPER PORTFOLIO</p>
      <div className="home__links">
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
    </div>
  );
}

export default Home;
