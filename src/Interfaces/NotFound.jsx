import React from "react";
import avatar from "../assets/images/404.png";
import "./styles.css";
const NotFound = () => {
  return (
    <section className="section bg-error">
      <div className="logoError">
        <a href="/">
          <img src={avatar} alt="404" />
        </a>
      </div>
    </section>
  );
};

export default NotFound;
