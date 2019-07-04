import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    content: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const MainComponent = ({children}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            {children}
        </main>
    );
};

MainComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainComponent;
