import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { lastParamFromUrl } from "../utils/url";
import StopSchedule from "../components/StopSchedule";

const Stop = ({location}) => {
    const stop_id = lastParamFromUrl(location.pathname);

    console.log("id", stop_id);

    return (
        <Layout>
            <SEO title={`Schedule for stop ${stop_id}`} />
            <StopSchedule stop_id={stop_id} />
        </Layout>
    );
};

Stop.propTypes = {
    location: PropTypes.object.isRequired
};

export default Stop;
