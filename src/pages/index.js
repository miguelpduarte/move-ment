import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { searchByStops } from "../requests/move_me_api";

const IndexPage = () => {
    searchByStops("FEUP");
    return (
        <Layout>
            <SEO title="Home" />
            <p>Work in Progress!</p>
        </Layout>
    );};

export default IndexPage;
