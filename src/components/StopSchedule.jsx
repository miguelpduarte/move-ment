import React, { useState } from "react";
import PropTypes from "prop-types";
import { nextArrivals } from "../requests/move_me_api";
import { Grid, Typography, IconButton, LinearProgress } from "@material-ui/core";
import SimplePaperMessage from "./SimplePaperMessage";
import StopScheduleTable from "./StopScheduleTable";
import { Refresh as RefreshIcon, Star as StarIcon } from "@material-ui/icons";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//     alignToEnd: {
//         alignSelf: "flex-end"
//     },
// });

const StopSchedule = ({provider_name, stop_name, stop_id}) => {
    const [loading, setLoading] = useState(false); // TODO: You're here!
    const [error, setError] = useState("");
    const [schedule, setSchedule] = useState(() => {
        // Starting the initial schedule getting and it being null while loading
        // TODO: Put it back inside a function, I am doing spaghett
        setLoading(true);
        nextArrivals(stop_id, provider_name)
            .then(new_schedule => {setLoading(false); setSchedule(new_schedule); setError(null);})
            .catch(err => {setLoading(false); setError(err);});
        return null;
    });

    // To be called via the refresh button onClick
    const updateStopScheduleFromId = async () => {
        console.log("Refreshing schedule...");
        setLoading(true);

        try {
            const new_schedule = await nextArrivals(stop_id, provider_name);
            setSchedule(new_schedule);
            setError("");
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    console.log("Current schedule", schedule);

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
                        <IconButton aria-label="Refresh schedule" onClick={() => updateStopScheduleFromId()}>
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
