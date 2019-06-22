import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import CustomThemeProvider from "./CustomThemeProvider";
import Navbar from "./Navbar";
import paddingStyles from "../css/paddings.module.css";
import positionStyles from "../css/positions.module.css";
import { FaHeart, FaGithub } from "react-icons/fa";
import Helmet from "react-helmet";

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
        <CustomThemeProvider>
            <Navbar siteTitle={data.site.siteMetadata.title}/>
            <div className={paddingStyles.horizontalSmall + " " + positionStyles.horizontalCentered}>
                <main>{children}</main>
                <footer>
                    <span>Built with <FaHeart/> by <a href="https://miguelpduarte.me">@miguelpduarte</a></span>
                    <span style={{marginLeft: "0.5em", marginRight: "0.5em"}}>//</span>
                    <span>Fork me on <a href="https://github.com/miguelpduarte/move-ment"><FaGithub/></a></span>
                </footer>
            </div>
            {/* Including fonts for Material UI */}
            <Helmet><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /></Helmet> 
        </CustomThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
