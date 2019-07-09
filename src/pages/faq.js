import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import FaqPageContent from "../components/Faq/FaqPageContent";

const FaqPage = () => {
    return (
        <Layout>
            <SEO title="FAQ - Frequently Asked Questions" />
            <FaqPageContent />
        </Layout>
    );
};

export default FaqPage;
