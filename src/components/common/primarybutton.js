import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./primarybutton.css";

const PrimaryButton = ({ buttonText, link }) => (
  <Link to={link} className="hero-btn">
    {buttonText}
  </Link>
);

PrimaryButton.propTypes = {
  buttonText: PropTypes.string,
  link: PropTypes.string,
};

PrimaryButton.defaultProps = {
  buttonText: "",
  link: "/",
};

export default PrimaryButton;
