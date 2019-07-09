import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useApiEndpoint } from "../../hooks/api";
import { nextArrivals } from "../../requests/move_me_api";
import { Grid, LinearProgress } from "@material-ui/core";
import SimplePaperMessage from "../SimplePaperMessage";
import StopScheduleHeader from "./StopScheduleHeader";
import StopScheduleTable from "./StopScheduleTable";

const StopSchedule = ({provider_name, stop_code, stop_id}) => {
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
            <Grid item xs={12} md={8}>
                <StopScheduleHeader
                    stop_id={stop_id}
                    stop_code={stop_code}
                    provider_name={provider_name}
                    refreshSchedule={() => hitApiEndpoint(stop_id, provider_name)}
                />
                <LinearProgress style={loading ? {} : {opacity: 0}}/>
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
    stop_code: PropTypes.string.isRequired,
    stop_id: PropTypes.string.isRequired
};

export default StopSchedule;
