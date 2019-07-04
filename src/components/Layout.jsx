import React from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import Helmet from "react-helmet";
import { isDarkModeEnabled } from "../utils/darkModeStateManager";
import calcTheme from "../theme";
import MainComponent from "./MainComponent";

// TODO: Switch to Redux or something simillar to be able to change the theme without need a full page reload
const theme = calcTheme(isDarkModeEnabled());


const Layout = ({children}) => {
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
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar siteTitle={data.site.siteMetadata.title}/>
            {/* Using a separate component to avoid problems with using classes before the theme is set */}
            <MainComponent children={children} />
            {/* Including fonts for Material UI */}
            <Helmet><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /></Helmet> 
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
