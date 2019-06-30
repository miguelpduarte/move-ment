import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "gatsby";

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(1, 2),
    },
    link: {
        color: "inherit",
        textDecoration: "none",
    },
}));

const StopListItem = ({stop}) => {
    const classes = useStyles();

    return (
        <Link className={classes.link} to={`/stop/${stop.stop_id}`}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6">
                        {stop.stop_code} | {stop.stop_name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {stop.provider}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

StopListItem.propTypes = {
    stop: PropTypes.exact({
        stop_id: PropTypes.string.isRequired,
        stop_code: PropTypes.string.isRequired,
        stop_name: PropTypes.string.isRequired,
        provider: PropTypes.string.isRequired,
    }).isRequired,
};

export default StopListItem;
