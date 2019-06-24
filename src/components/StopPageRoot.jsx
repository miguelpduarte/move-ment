import React from "react";
import PropTypes from "prop-types";
import Layout from "./Layout";
import SEO from "./Seo";
import { getInfoFromStopId } from "../utils/parsing";
import StopSchedule from "./StopSchedule";

const StopPageRoot = ({stop_id}) => {
    const [provider_name, stop_name] = getInfoFromStopId(stop_id);

    return (
        <Layout>
            <SEO title={`Schedule for ${stop_name}`} />
            <StopSchedule stop_name={stop_name} provider_name={provider_name} stop_id={stop_id} />
        </Layout>
    );
};

StopPageRoot.propTypes = {
    stop_id: PropTypes.string.isRequired
};

export default StopPageRoot;
