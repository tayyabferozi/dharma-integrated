import React from "react";

import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <div className="Text">
        <h2>
          Subscribe for updates
      </h2>
        <p>
          Drop in your email address below and we’ll update you when new articles are released!
      </p>
        <form>
          <input type="text" placeholder="Enter your email address"></input>
          <button>
            Subscribe
          </button>
        </form>
      </div>
    </div >
  );
};

export default Subscribe;