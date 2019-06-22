import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import colorStyles from "../css/colors.module.css";

const Header = ({ siteTitle }) => (
    <header
        className={colorStyles.background1}
        style={{
            marginBottom: "1.45rem",
        }}
    >
        <div
            style={{
                margin: "0 auto",
                maxWidth: "60em",
                padding: "1.45rem 1.0875rem",
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "",
};

export default Header;
