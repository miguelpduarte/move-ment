import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import SearchArea from "../components/SearchArea";


const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <SearchArea />
        </Layout>
    );};

export default IndexPage;
