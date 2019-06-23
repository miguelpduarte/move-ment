import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import StopResultsItem from "./StopResultsItem";
import SimplePaperMessage from "./SimplePaperMessage";

const StopResultsList = ({search_results}) => {
    return (
        <Grid container justify="center" spacing={3}>
            {search_results ?
                search_results.length === 0 ?
                    <Grid item xs={12}>
                        <SimplePaperMessage message="No results!" />
                    </Grid>
                    :
                    search_results.map(search_result => (
                        <Grid key={search_result.raw_string} item xs={12}>
                            <StopResultsItem search_result={search_result} />
                        </Grid>
                    ))
                :
                <React.Fragment/>
            }
        </Grid>
    );
};

StopResultsList.propTypes = {
    search_results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StopResultsList;
