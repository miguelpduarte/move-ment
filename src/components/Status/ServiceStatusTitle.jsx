import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";


const ServiceStatusTitle = ({name}) => {
    return (
        <Typography variant="h4">
            {name}:
        </Typography>
    );
};

ServiceStatusTitle.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ServiceStatusTitle;
