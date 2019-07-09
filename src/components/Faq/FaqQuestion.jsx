import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const FaqQuestion = ({children}) => {
    return (
        <Typography variant="h5">
            Q: {children}
        </Typography>
    );
};

FaqQuestion.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FaqQuestion;
