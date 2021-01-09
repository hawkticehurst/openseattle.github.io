import React from "react";
import { Link } from "gatsby";
import OpenSeattleLogo from "../../images/openseattle-icon.png";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div>
        <img src={OpenSeattleLogo} alt="Open Seattle Logo" />
      </div>
      <div className="footer-link-container">
        <div className="footer-org-column">
          <h2>Open Seattle</h2>
          <Link to="/about">About</Link>
        </div>
        <div className="footer-connect-column">
          <h2>Connect</h2>
          <div className="footer-connect-links">
            <a href="https://join.slack.com/t/openseattle/shared_invite/enQtNzczMjg5MzYyNzg4LTgwZDExYmE2MWQ4N2ZiN2VmNDllMmU3ODI0YWFkMTQ5ODY4MGMwNDBhOTQwNTU3OGJmYTI5ZTE3YWQ2NTdjYWY">
              Slack
            </a>
            <a href="https://www.meetup.com/openseattle/">Meetup</a>
            <a href="https://github.com/openseattle">Github</a>
          </div>
        </div>
        <div className="footer-mailing-list-column">
          <h2>Join Our Mailing List</h2>
          <div className="footer-mailing-list-input-container">
            <input type="text" />
            <a href="/">Submit</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright-container">
        <p>Copyright © {currentYear} Open Seattle</p>
      </div>
    </div>
  );
}

export default Footer;
