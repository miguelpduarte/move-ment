import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import StopListItem from "./StopListItem";
import SimplePaperMessage from "./SimplePaperMessage";

const StopsList = ({stops, no_items}) => {
    return (
        <Grid container justify="center" spacing={3}>
            {stops ?
                stops.length === 0 ?
                    <Grid item xs={12}>
                        {no_items}
                    </Grid>
                    :
                    stops.map(stop => (
                        <Grid key={stop.stop_id} item xs={12}>
                            <StopListItem stop={stop} />
                        </Grid>
                    ))
                :
                <React.Fragment/>
            }
        </Grid>
    );
};

StopsList.defaultProps = {
    no_items: (<SimplePaperMessage message="No results!" />)
};

StopsList.propTypes = {
    stops: PropTypes.arrayOf(PropTypes.object),
    no_items: PropTypes.node.isRequired,
};

export default StopsList;
