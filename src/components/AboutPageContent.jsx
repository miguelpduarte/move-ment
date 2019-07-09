// Necessary to split the component from the page due to the theme not being loaded yet (it is loaded in Layout.jsx)
// This is a problem from using Gatsby, really, because it would surround <App> in a normal React app and everything would be fine
import React from "react";
import { Typography, Grid, Card, CardContent, CardActions, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link as GLink } from "gatsby";

const useStyles = makeStyles(theme => ({
    spaceTop: {
        marginTop: theme.spacing(2),
    },
    card: {
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
    },
}));

const AboutPageContent = () => {
    const classes = useStyles();

    return (
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
                            <b>For non tech people:</b> This means that move-ment uses <i>move-me</i> 's data and services all the same (hence the occasional uncontrollable downtime - working on it) and just provides a new look and experience. - Hopefully a better one!
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            It is a work in progress (and voluntary open-source one, at it), so keep in mind that some bugs and random downtime might occurr!
                        </Typography>
                        <Typography className={classes.spaceTop} variant="overline">
                            Found a problem or have a suggestion? <GLink to="/faq" className={classes.link}>Visit the FAQ</GLink> or <a className={classes.link} href="https://github.com/miguelpduarte/move-ment/issues">Submit an issue!</a>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary">
                            <Link color="inherit" href="https://github.com/miguelpduarte/move-ment">
                                Check out the source code
                            </Link>
                        </Button>
                        <Button variant="contained" color="primary">
                            <Link color="inherit" href="https://miguelpduarte.me">
                                Built by @miguelpduarte
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default AboutPageContent;
