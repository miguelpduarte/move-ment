import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaHeart, FaGithub } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
    spaceTop: {
        marginTop: theme.spacing(2),
    },
}));

const AboutPage = () => {
    const classes = useStyles();

    return (
        <Layout>
            <SEO title="About" />
            <Grid container justify="center">
                <Grid item xs={12} md={8}>
                    <Typography gutterBottom variant="h3">
                        About move-ment:
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        move-ment is an alternative webapp front-end to <a href="http://move-me.mobi">move-me</a>'s website and mobile app.
                    </Typography>
                    <Typography gutterBottom variant="body1">
                        It is a work in progress (and voluntary open-source one, at it), so keep in mind that some bugs and random downtime might occurr!
                    </Typography>
                    <Typography className={classes.spaceTop} gutterBottom variant="h6">
                        <span>Built with <FaHeart/> by <a href="https://miguelpduarte.me">@miguelpduarte</a></span>
                        <span style={{marginLeft: "0.5em", marginRight: "0.5em"}}>//</span>
                        <span>Check out the source code at <a href="https://github.com/miguelpduarte/move-ment"><FaGithub/></a></span>
                    </Typography>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default AboutPage;
