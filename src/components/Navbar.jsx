import React from "react";
import { Link } from "gatsby";
import SearchBar from "./SearchBar";
import colorStyles from "../css/colors.module.css";
import positionStyles from "../css/positions.module.css";
import paddingStyles from "../css/paddings.module.css";
import marginStyles from "../css/margins.module.css";

const Navbar = ({siteTitle}) => (
    <header 
        className={colorStyles.background1 + " " + marginStyles.navbar}
    >
        <div className={positionStyles.flexCenterItems + " " + positionStyles.horizontalCentered + " " + paddingStyles.navbar}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }} className={marginStyles.rightSmall}>
                <h1 style={{ display: "inline", margin: "0", color: "white", textDecoration: "none" }}>{siteTitle}</h1>
            </Link>
            <SearchBar />
        </div>
    </header>
);

export default Navbar;