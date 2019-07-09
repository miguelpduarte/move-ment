import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import ServiceStatusListItem from "./ServiceStatusListItem";

const ServiceStatusList = ({statuses}) => {
    return (
        <List>
            {statuses.map(({name, available}) => (
                <ServiceStatusListItem
                    key={name}
                    name={name}
                    available={available}
                />
            ))}
        </List>
    );
};

ServiceStatusList.propTypes = {
    statuses: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
    }))
};

export default ServiceStatusList;
