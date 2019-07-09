import React from "react";
import { Grid, Typography, Paper, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoveMeServiceStatus from "./MoveMeServiceStatus";

const useStyles = makeStyles(theme => ({
    titleContainer: {
        marginBottom: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2, 4),
    },
}));

const StatusPageContent = () => {
    const classes = useStyles();

    return (
        <Grid container alignItems="stretch" justify="center">
            <Grid item xs={12} md={8} className={classes.titleContainer}>
                <Typography variant="h3">
                    Service Status:
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper className={classes.paper}>
                    {/* List of Service Status(es) */}
                    <List>
                        <MoveMeServiceStatus/>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default StatusPageContent;
