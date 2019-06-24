import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { lastParamFromUrl, getInfoFromStopId } from "../utils/parsing";
import StopSchedule from "../components/StopSchedule";

const Stop = ({location}) => {
    const stop_id = lastParamFromUrl(location.pathname);
    const [stop_name, provider_name] = getInfoFromStopId(stop_id);

    return (
        <Layout>
            <SEO title={`Schedule for stop ${stop_name}`} />
            <StopSchedule stop_name={stop_name} provider_name={provider_name} stop_id={stop_id} />
        </Layout>
    );
};

Stop.propTypes = {
    location: PropTypes.object.isRequired
};

export default Stop;
