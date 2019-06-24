import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql } from "gatsby";
import CustomThemeProvider from "./CustomThemeProvider";
import Navbar from "./Navbar";
import Helmet from "react-helmet";

import "./layout.css";

const useStyles = makeStyles(theme => ({
    content: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

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

    const classes = useStyles();

    return (
        <CustomThemeProvider>
            <Navbar siteTitle={data.site.siteMetadata.title}/>
            {/* <div className={paddingStyles.horizontalSmall + " " + positionStyles.horizontalCentered}> */}
            <main className={classes.content}>{children}</main>
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
