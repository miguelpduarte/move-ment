import React from "react";
import { Switch, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { ColorLens } from "@material-ui/icons";
import { useDarkModeToggler } from "../hooks/darkMode";

const DarkModeSwitch = () => {
    const [is_dark_mode_enabled, toggleDarkMode] = useDarkModeToggler();

    return (
        <ListItem button onClick={(e) => {e.stopPropagation(); toggleDarkMode();}}>
            <ListItemIcon>
                <ColorLens/>
            </ListItemIcon>
            <ListItemText id="switch-list-label-dark-mode" primary="Dark Mode (refreshes)" />
            <ListItemSecondaryAction>
                <Switch
                    edge="end"
                    onChange={toggleDarkMode}
                    checked={is_dark_mode_enabled}
                    inputProps={{ "aria-labelledby": "switch-list-label-dark-mode" }}
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default DarkModeSwitch;
