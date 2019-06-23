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

const StopResultsItem = ({search_result}) => {
    const classes = useStyles();

    return (
        <Link className={classes.link} to={`/stop/${search_result.stop_id}`}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6">
                        {search_result.stop_code} | {search_result.stop_name}
                    </Typography>
                    <Typography variant="subtitle2">
                        {search_result.provider}
                    </Typography>
                    <Typography variant="body2">
                    Debug: {search_result.raw_string}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

StopResultsItem.propTypes = {
    search_result: PropTypes.object.isRequired,
};

export default StopResultsItem;
