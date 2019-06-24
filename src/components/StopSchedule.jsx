import React, { useState } from "react";
import PropTypes from "prop-types";
import { nextArrivals } from "../requests/move_me_api";
import { Grid, Typography, IconButton } from "@material-ui/core";
import SimplePaperMessage from "./SimplePaperMessage";
import StopScheduleTable from "./StopScheduleTable";
import { Refresh as RefreshIcon } from "@material-ui/icons";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//     alignToEnd: {
//         alignSelf: "flex-end"
//     },
// });

const StopSchedule = ({provider_name, stop_name, stop_id}) => {
    const [error, setError] = useState(null);
    const [schedule, setSchedule] = useState(() => {
        if (!provider_name || !stop_name) {
            setError("Invalid Stop ID!");
            return null;
        }
        // Starting the initial schedule getting and it being null while loading
        // TODO: Put it back inside a function, I am doing spaghett
        nextArrivals(stop_id, provider_name)
            .then(new_schedule => {setSchedule(new_schedule); setError(null);})
            .catch(err => setError(err));
        return null;
    });

    // To be called via the refresh button onClick
    const updateStopScheduleFromId = async () => {
        console.log("Refreshing schedule...");
        if (!provider_name || !stop_name) {
            setError("Invalid Stop ID!");
            setSchedule(null);
            return;
        }

        try {
            const new_schedule = await nextArrivals(stop_id, provider_name);
            setSchedule(new_schedule);
            setError(null);
        } catch (err) {
            setError(err);
        }
    };

    console.log("Current schedule", schedule);

    return (
        <Grid container justify="center" spacing={1}>
            <Grid container alignItems="center" item xs={12} md={8}>
                <Grid item xs={11}>
                    <Typography variant="h4">
                    Schedule for {stop_name} ({provider_name}):
                    </Typography>
                </Grid>
                <Grid item xs>
                    <IconButton onClick={() => updateStopScheduleFromId()}>
                        <RefreshIcon fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
                {schedule ?
                    error ?
                        <SimplePaperMessage message={error}/>
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
    provider_name: PropTypes.string.isRequired,
    stop_name: PropTypes.string.isRequired,
    stop_id: PropTypes.string.isRequired
};

export default StopSchedule;
