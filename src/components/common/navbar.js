import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../images/openseattle-icon.png";
import { SiSlack, SiGithub, SiMeetup } from "react-icons/si";
import "./navbar.css";

const Navbar = ({ siteTitle }) => (
  <section className="navbar-container">
    <section className="navbar-logo-container">
      <Link to="/" className="navbar-logo-link">
        <img className="navbar-logo" src={logo} alt="Open Seattle logo." />
        <h1 className="navbar-logo-text">{siteTitle}</h1>
      </Link>
    </section>
    <section className="navbar-link-container">
      <Link to="https://join.slack.com/t/openseattle/shared_invite/enQtNzczMjg5MzYyNzg4LTgwZDExYmE2MWQ4N2ZiN2VmNDllMmU3ODI0YWFkMTQ5ODY4MGMwNDBhOTQwNTU3OGJmYTI5ZTE3YWQ2NTdjYWY">
        <SiSlack size="25px" />
      </Link>
      <Link to="https://www.meetup.com/openseattle/">
        <SiMeetup size="28px" />
      </Link>
      <Link to="https://github.com/openseattle">
        <SiGithub size="25px" />
      </Link>
    </section>
  </section>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: "",
};

export default Navbar;
