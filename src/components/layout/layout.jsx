/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import FacebookLogo from "../../assets/images/icons/logo-facebook.svg";
import InstagramLogo from "../../assets/images/icons/logo-instagram.svg";
import TwitterLogo from "../../assets/images/icons/logo-twitter.svg";
import WhatsappLogo from "../../assets/images/icons/logo-whatsapp.svg";

import Header from "../header/header";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="footer-nav">
            <div className="nav-links">
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                className="facebook"
                aria-hidden="true"
              >
                <FacebookLogo />
              </a>
              <a
                href="https://instagram.com"
                className="instagram"
                aria-hidden="true"
              >
                <InstagramLogo />
              </a>
              <a
                href="https://twitter.com"
                className="twitter"
                aria-hidden="true"
              >
                <TwitterLogo />
              </a>
              <a
                href="https://whatsapp.com"
                className="whatsapp"
                aria-hidden="true"
              >
                <WhatsappLogo />
              </a>
            </div>
          </div>
          Copyright © {new Date().getFullYear()} by Wuco. All rights reserved
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
