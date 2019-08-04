// Necessary to split the component from the page due to the theme not being loaded yet (it is loaded in Layout.jsx)
// This is a problem from using Gatsby, really, because it would surround <App> in a normal React app and everything would be fine
import React from "react";
import { Typography, Grid, Paper, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FaqQA from "./FaqQA";
import { Link as GLink } from "gatsby";

const useStyles = makeStyles(theme => ({
    spaceTop: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2, 4),
    },
    link: {
        color: theme.palette.primary.main,
    },
}));

const FaqPageContent = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item xs={12} md={8}>
                <Paper className={classes.paper}>
                    <Typography gutterBottom variant="h3">
                        Frequently Asked Questions (FAQ):
                    </Typography>
                    <List>
                        <FaqQA
                            question={"Are you in any way affiliated with STCP, move-me, or any other organization?"}
                            answer={
                            <>
                                No! This application has been developed independently of any entity other than its author, <a className={classes.link} href="https://miguelpduarte.me">@miguelpduarte</a> (and the open-source community, I guess).
                            </>
                            }
                        />

                        <FaqQA
                            question={"Why does the search page say 'No results!' despite me entering a stop that exists?"}
                            answer={
                            <>
                                This is due to problems in <i>move-me</i> 's API (service) and thus something that it is not possible to do anything about, at the moment.
                                You can try checking the <GLink className={classes.link} to="/status">service's status.</GLink>
                            </>
                            }
                        />
                    </List>

                    <Typography className={classes.spaceTop} variant="body2">
                        Did not find what you were looking for? <a className={classes.link} href="https://github.com/miguelpduarte/move-ment/issues">Submit an issue!</a>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FaqPageContent;
