import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { nextArrivals } from "../requests/move_me_api";
import { Grid, Typography, IconButton, LinearProgress } from "@material-ui/core";
import SimplePaperMessage from "./SimplePaperMessage";
import StopScheduleTable from "./StopScheduleTable";
import { Refresh as RefreshIcon, Star as StarIcon } from "@material-ui/icons";
import { useApiEndpoint } from "../hooks/api";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//     alignToEnd: {
//         alignSelf: "flex-end"
//     },
// });

const StopSchedule = ({provider_name, stop_name, stop_id}) => {
    const [schedule, error, loading, hitApiEndpoint] = useApiEndpoint(nextArrivals);

    useEffect(() => {
        // To only run this hook for the initial update (further updates are done via the button callback)
        // For the initial update it is necessary to:
        // - not have either a schedule or an error (after hitting the endpoint for the first time we will have one of the two)
        // - not be loading -> prevents nested re-render loop (recursive stackoverflow)
        if (!(schedule || error) && !loading) {
            hitApiEndpoint(stop_id, provider_name);
        }
    }, [stop_id, provider_name, hitApiEndpoint, loading, schedule, error]);

    return (
        <Grid container justify="center">
            <Grid container alignItems="center" item xs={12} md={8}>
                <Grid item xs={9} sm={10}>
                    <Typography variant="h5">
                    Schedule for {stop_name} ({provider_name}):
                    </Typography>
                </Grid>
                <Grid item xs container>
                    <Grid item xs={6}>
                        {/* eslint-disable-next-line no-undef */}
                        <IconButton aria-label="Add to or Remove from Favorites" onClick={() => alert("Work in Progress")}>
                            <StarIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton aria-label="Refresh schedule" onClick={() => hitApiEndpoint(stop_id, provider_name)}>
                            <RefreshIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
                {loading ? <LinearProgress/> : <React.Fragment/>}
                {error ?
                    <SimplePaperMessage message={error}/>
                    :
                    schedule ?
                        <StopScheduleTable schedule={schedule} />
                        :
                        <React.Fragment/>
                }
            </Grid>
        </Grid>
    );

    // Dont forget if null and empty displaying
};

StopSchedule.propTypes = {
    provider_name: PropTypes.string.isRequired,
    stop_name: PropTypes.string.isRequired,
    stop_id: PropTypes.string.isRequired
};

export default StopSchedule;
