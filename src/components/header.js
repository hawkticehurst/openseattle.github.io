import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <section
    style={{
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0 0 1.5rem 0",
      padding: "1rem",
    }}>
    <h1 style={{ margin: "0", fontSize: "26px" }}>
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",
        }}>
        {siteTitle}
      </Link>
    </h1>
    <section>
      <Link to="/about" style={{ margin: "0 0.5rem", color: "black" }}>
        About
      </Link>
      <Link
        to="https://join.slack.com/t/openseattle/shared_invite/enQtNzczMjg5MzYyNzg4LTgwZDExYmE2MWQ4N2ZiN2VmNDllMmU3ODI0YWFkMTQ5ODY4MGMwNDBhOTQwNTU3OGJmYTI5ZTE3YWQ2NTdjYWY"
        style={{ margin: "0 0.5rem", color: "black" }}>
        Slack
      </Link>
      <Link
        to="https://www.meetup.com/openseattle/"
        style={{ margin: "0 0.5rem", color: "black" }}>
        Meetup
      </Link>
      <Link
        to="https://github.com/openseattle"
        style={{ margin: "0 0.5rem", color: "black" }}>
        Github
      </Link>
    </section>
  </section>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
