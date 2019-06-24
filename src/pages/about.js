import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaHeart, FaGithub } from "react-icons/fa";

const useStyles = makeStyles(theme => {console.log(theme); return ({
    spaceTop: {
        marginTop: theme.spacing(2),
    },
    card: {
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        // textDecoration: "none",
    },
});});

const AboutPage = () => {
    const classes = useStyles();

    return (
        <Layout>
            <SEO title="About" />
            <Grid container justify="center">
                <Grid item xs={12} md={8}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="h3">
                            About move-ment:
                            </Typography>
                            <Typography gutterBottom variant="h5">
                            move-ment is an alternative webapp front-end to <a className={classes.link} href="http://move-me.mobi">move-me</a>'s website and mobile app.
                            </Typography>
                            <Typography gutterBottom variant="body1">
                            It is a work in progress (and voluntary open-source one, at it), so keep in mind that some bugs and random downtime might occurr!
                            </Typography>
                            <Typography gutterBottom className={classes.spaceTop} variant="h6">
                            Built with <FaHeart/> by <a className={classes.link} href="https://miguelpduarte.me">@miguelpduarte</a>
                            </Typography>
                            <Typography variant="h6">
                            Check out the source code at <a className={classes.link} href="https://github.com/miguelpduarte/move-ment"><FaGithub/></a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default AboutPage;
