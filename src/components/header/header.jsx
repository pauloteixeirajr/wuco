import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./header.scss";

const links = [
  { path: "/about", label: "About" },
  { path: "/orgs", label: "Organisation" },
  { path: "/membership", label: "Membership" },
  { path: "/coaching", label: "Coaching" },
  { path: "/clubs", label: "Clubs" },
  { path: "/events", label: "Events" },
];

const Header = ({ siteTitle }) => {
  const [sticky, setSticky] = useState(false);

  return (
    <div>
      <header className={sticky ? "sticky-nav" : null}>
        <div>
          <div className="links">
            {links.slice(0, 3).map(link => (
              <Link key={link.path} className="link" to={link.path}>
                {link.label || siteTitle}
              </Link>
            ))}
          </div>
          <div className="logo-container">
            <Link className="logo" to="/">
              Wuco
            </Link>
          </div>
          <div className="links">
            {links.slice(3).map(link => (
              <Link key={link.path} className="link" to={link.path}>
                {link.label || siteTitle}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <Waypoint
        onEnter={() => setSticky(false)}
        onLeave={() => setSticky(true)}
      />
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
