import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "./Layout";
import SEO from "./Seo";
import { getInfoFromStopId } from "../utils/parsing";
import StopSchedule from "./StopSchedule";

const StopPageRoot = ({stop_id}) => {
    const [error, setError] = useState(false);

    let provider_name, stop_name;
    try {
        [provider_name, stop_name] = getInfoFromStopId(stop_id);
    } catch (ignored) {
        // Ignoring the error variable as it can only be a parsing error due to the regex in getInfoFromStopId not applying
        // The value of the error variable is not relevant as well, since this component only handles that one error, and a boolean value is more than enough
        setError(true);
    }

    return (
        <Layout>
            <SEO title={error ? "Invalid Stop ID" : `Schedule for ${stop_name}`} />
            <>
                {error ?
                    <SimplePaperMessage message={"Invalid Stop ID"}/>
                    :
                    <StopSchedule stop_name={stop_name} provider_name={provider_name} stop_id={stop_id} />
                }
            </>
        </Layout>
    );
};

StopPageRoot.propTypes = {
    stop_id: PropTypes.string.isRequired
};

export default StopPageRoot;
