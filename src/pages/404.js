import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Typography, Container } from "@material-ui/core";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Container fixed>
            <Typography variant="h1">
                404
            </Typography>
            <Typography variant="body1">
                This page does not exist!
            </Typography>
        </Container>
    </Layout>
);

export default NotFoundPage;
