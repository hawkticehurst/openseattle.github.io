import React from "react";
import PropTypes from "prop-types";
import PrimaryButton from "./common/primarybutton";
import "./hero.css";

const Hero = ({ heroText }) => (
  <section className="hero-container">
    <h1 className="hero-text">{heroText}</h1>
    <section className="hero-btn-container">
      <PrimaryButton buttonText="I'm a volunteer" link="/" />
      <PrimaryButton buttonText="I'm an organization" link="/" />
    </section>
  </section>
);

Hero.propTypes = {
  heroText: PropTypes.string,
};

Hero.defaultProps = {
  heroText: "",
};

export default Hero;
