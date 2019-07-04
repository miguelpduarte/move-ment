import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import AboutPageContent from "../components/AboutPageContent";

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <AboutPageContent />
        </Layout>
    );
};

export default AboutPage;
