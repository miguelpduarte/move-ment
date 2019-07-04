import React from "react";
import PropTypes from "prop-types";
import { useFavoriteStop } from "../../hooks/favorites";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Refresh as RefreshIcon, Star as StarIcon, StarBorder as StarBorderIcon } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    iconsContainer: {
        textAlign: "center"
    },
    scheduleHeader: {
        marginBottom: theme.spacing(1),
    },
}));

const StopScheduleHeader = ({stop_id, stop_code, provider_name, refreshSchedule}) => {
    const [favorited, toggleFavoriteState] = useFavoriteStop(stop_id, stop_code, provider_name);
    const classes = useStyles();

    return (
        <Grid container justify="space-between" alignItems="center" className={classes.scheduleHeader}>
            <Grid item xs={8} sm={10} container direction="column">
                <Grid item>
                    <Typography variant="h4">
                        {stop_code}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        {provider_name}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs container className={classes.iconsContainer}>
                <Grid item xs={6}>
                    {/* eslint-disable-next-line no-undef */}
                    <IconButton aria-label="Add to or Remove from Favorites" onClick={toggleFavoriteState}>
                        {favorited ? 
                            <StarIcon fontSize="large" />
                            :
                            <StarBorderIcon fontSize="large" />
                        }
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <IconButton aria-label="Refresh schedule" onClick={refreshSchedule}>
                        <RefreshIcon fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

StopScheduleHeader.propTypes = {
    stop_id: PropTypes.string.isRequired,
    stop_code: PropTypes.string.isRequired,
    provider_name: PropTypes.string.isRequired,
    refreshSchedule: PropTypes.func.isRequired,
};

export default StopScheduleHeader;
