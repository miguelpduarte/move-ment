import React from "react";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";

const StopResultsItem = ({search_result}) => {
    return (
        <Card>
            {search_result.raw_string}
        </Card>
    );
};

StopResultsItem.propTypes = {
    search_result: PropTypes.object.isRequired,
};

export default StopResultsItem;
