import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";

const ServiceStatusListItem = ({name, available}) => {
    const theme = useTheme();

    return (
        <ListItem>
            <ListItemText>
                {name}
            </ListItemText>
            <ListItemIcon style={{color: available ? theme.palette.primary.main : theme.palette.error.main}}>
                {available ? 
                    <Check/>
                    :
                    <Close/>
                }
            </ListItemIcon>
        </ListItem>
    );
};

ServiceStatusListItem.propTypes = {
    name: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
};

export default ServiceStatusListItem;
