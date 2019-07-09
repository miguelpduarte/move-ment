import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Typography } from "@material-ui/core";


const ServiceStatusTitle = ({name}) => {
    return (
        <ListItemText>
            <Typography variant="h4">
                {name}:
            </Typography>
        </ListItemText>
    );
};

ServiceStatusTitle.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ServiceStatusTitle;
