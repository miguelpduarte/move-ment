import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";

const useStyle = makeStyles({
    text: {
        textAlign: "center"
    },
    link: {
        color: "inherit",
        textDecoration: "none",
    },
});

const NotFoundPage = () => {
    const classes = useStyle();

    return (
        <Layout>
            <SEO title="404: Not found" />
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Typography className={classes.text} variant="h1">
                        404
                    </Typography>
                    <Typography gutterBottom className={classes.text} variant="body1">
                        This page does not exist!
                    </Typography>
                    <Link className={classes.link} to="/">
                        <Typography className={classes.text} variant="body2">
                        Back to the homepage!
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );};

export default NotFoundPage;
