import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import CustomThemeProvider from "./CustomThemeProvider";
import Navbar from "./Navbar";
// import paddingStyles from "../css/paddings.module.css";
// import positionStyles from "../css/positions.module.css";
import Helmet from "react-helmet";

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
        <CustomThemeProvider>
            <Navbar siteTitle={data.site.siteMetadata.title}/>
            {/* <div className={paddingStyles.horizontalSmall + " " + positionStyles.horizontalCentered}> */}
            <main>{children}</main>
            {/* </div> */}
            {/* Including fonts for Material UI */}
            <Helmet><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /></Helmet> 
        </CustomThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
