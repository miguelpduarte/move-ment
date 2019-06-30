import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "./Layout";
import SEO from "./Seo";
import { getInfoFromStopId } from "../utils/parsing";
import StopSchedule from "./StopSchedule";
import SimplePaperMessage from "./SimplePaperMessage";
import { Grid } from "@material-ui/core";

const StopPageRoot = ({stop_id}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [stop_info, setStopInfo] = useState({provider_name: "", stop_name: ""});
    
    useEffect(() => {
        try {
            const [provider_name, stop_name] = getInfoFromStopId(stop_id);
            setError(false);
            setStopInfo({
                provider_name,
                stop_name
            });
            setLoading(false);
        } catch (ignored) {
            // Ignoring the error variable as it can only be a parsing error due to the regex in getInfoFromStopId not applying
            // The value of the error variable is not relevant as well, since this component only handles that one error, and a boolean value is more than enough
            setError(true);
            setLoading(false);            
        }
    }, [stop_id]);

    return (
        <Layout>
            <SEO title={error ? "Invalid Stop ID" : `Schedule for ${stop_info.stop_name}`} />
            <>
                {loading ?
                    <React.Fragment/>
                    :
                    error ?
                        <Grid container justify="center">
                            <Grid item xs={12} md={8}>
                                <SimplePaperMessage message={"Invalid Stop ID"}/>
                            </Grid>
                        </Grid>
                        :
                        <StopSchedule stop_name={stop_info.stop_name} provider_name={stop_info.provider_name} stop_id={stop_id} />
                }
            </>
        </Layout>
    );
};

StopPageRoot.propTypes = {
    stop_id: PropTypes.string.isRequired
};

export default StopPageRoot;
