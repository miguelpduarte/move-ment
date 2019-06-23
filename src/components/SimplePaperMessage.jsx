import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    paper: {
        // width: 100,
        padding: "1em 1.5em",
        textAlign: "center",
    },
});

const SimplePaperMessage = ({message}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5">
                {message}
            </Typography>
        </Paper>
    );
};

SimplePaperMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default SimplePaperMessage;
