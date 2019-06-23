import React from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import SEO from "../components/Seo";
import { Container, Typography, Paper } from "@material-ui/core";
import SearchArea from "../components/SearchArea";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
    },
    rootPaper: {
        padding: theme.spacing(3, 2),
    },
}));

const IndexPage = () => {
    const classes = useStyles();

    return (
        <Layout>
            <SEO title="Home" />
            <Container maxWidth="md" className={classes.root}>
                <Paper className={classes.rootPaper}>
                    <Typography gutterBottom variant="h4">
                    Work in Progress!
                    </Typography>
                    <SearchArea />
                </Paper>
            </Container>
        </Layout>
    );};

export default IndexPage;
