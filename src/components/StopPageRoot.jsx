import React from "react";
import PropTypes from "prop-types";
import Layout from "./Layout";
import SEO from "./Seo";
import { getInfoFromStopId } from "../utils/parsing";
import StopSchedule from "./StopSchedule";

const StopPageRoot = ({stop_id}) => {
    let provider_name, stop_name;
    try {
        [provider_name, stop_name] = getInfoFromStopId(stop_id);
    } catch (ignored) {
        // Contiue regardless of error, it will be detected below because the values will not be set
        // Was having errors due to the regex not applying when the format was invalid and whatnot so this should work
    }

    return (
        <Layout>
            <SEO title={stop_name ? `Schedule for ${stop_name}` : "Invalid Stop ID"} />
            <StopSchedule stop_name={stop_name} provider_name={provider_name} stop_id={stop_id} />
        </Layout>
    );
};

StopPageRoot.propTypes = {
    stop_id: PropTypes.string.isRequired
};

export default StopPageRoot;
