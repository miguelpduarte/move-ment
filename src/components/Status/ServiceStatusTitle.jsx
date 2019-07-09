import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(1),
    }
}));

const ServiceStatusTitle = ({name}) => {
    const classes = useStyles();

    return (
        <Typography className={classes.root} variant="h4">
            {name}:
        </Typography>
    );
};

ServiceStatusTitle.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ServiceStatusTitle;
