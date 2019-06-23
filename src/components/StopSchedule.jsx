import React, { useState } from "react";
import PropTypes from "prop-types";
import { nextArrivals } from "../requests/move_me_api";
import { Grid, Typography, IconButton } from "@material-ui/core";
import SimplePaperMessage from "./SimplePaperMessage";
import StopScheduleTable from "./StopScheduleTable";
import { Refresh as RefreshIcon } from "@material-ui/icons";

const StopSchedule = ({stop_id}) => {
    const [error, setError] = useState(null);
    const [schedule, setSchedule] = useState(() => {
        // Starting the initial schedule getting and it being null while loading
        // TODO: Put it back inside a function, I am doing spaghett
        nextArrivals(stop_id)
            .then(new_schedule => setSchedule(new_schedule))
            .catch(err => setError(err));
        return null;
    });

    // To be called via the refresh button onClick
    const updateStopScheduleFromId = async () => {
        console.log("Updating schedule...");
        try {
            const new_schedule = await nextArrivals(stop_id);
            setSchedule(new_schedule);
        } catch (err) {
            setError(err);
        }
    };
    
    console.log("Current schedule", schedule);

    return (
        <Grid container justify="center">
            <Grid container item xs={12} md={8}>
                <Grid item xs={9}>
                    <Typography variant="h3">
                    Schedule for stop {stop_id}:
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <IconButton onClick={() => updateStopScheduleFromId()}>
                        <RefreshIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
                {schedule ?
                    error ?
                        <SimplePaperMessage message="An error ocurred!"/>
                        :
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
    stop_id: PropTypes.string.isRequired
};

export default StopSchedule;
