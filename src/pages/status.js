import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import StatusPageContent from "../components/Status/StatusPageContent";


const StatusPage = () => {
    return (
        <Layout>
            <SEO title="Service Status" />
            <StatusPageContent/>
        </Layout>
    );};

export default StatusPage;
