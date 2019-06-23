import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StopResultsItem from "./StopResultsItem";
import SimplePaperMessage from "./SimplePaperMessage";

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         height: 140,
//         width: 100,
//     },
//     control: {
//         padding: theme.spacing(2),
//     },
// }));

const StopResultsList = ({search_results}) => {
    // const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" spacing={3}>
            {search_results.length === 0 ?
                <SimplePaperMessage message="No results!" />
                :
                search_results.map(search_result => (
                    <Grid key={search_result.raw_string} item xs="12">
                        <StopResultsItem search_result={search_result} />
                    </Grid>
                ))}
        </Grid>
    );
};

StopResultsList.propTypes = {
    search_results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StopResultsList;
