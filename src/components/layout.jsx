/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { FaHeart, FaGithub } from "react-icons/fa";

import Header from "./header";
import "./layout.css";

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
          style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0,
          }}
      >
          <main>{children}</main>
          <footer>
              <span>Built with <FaHeart/> by <a href="https://miguelpduarte.me">@miguelpduarte</a></span>
              <span style={{marginLeft: "0.5em", marginRight: "0.5em"}}>//</span>
              <span>Fork me on <a href="https://github.com/miguelpduarte/move-ment"><FaGithub/></a></span>
          </footer>
      </div>
    </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
