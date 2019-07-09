import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
        // backgroundColor: theme.pallete,
    },
}));

const FaqAnswer = ({children}) => {
    const classes = useStyles();

    return (
        <Typography className={classes.root} variant="body1">
            A: {children}
        </Typography>
    );
};

FaqAnswer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FaqAnswer;
