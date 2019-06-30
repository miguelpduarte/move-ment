import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import StopListItem from "./StopListItem";
import SimplePaperMessage from "./SimplePaperMessage";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    listItem: {
        marginBottom: theme.spacing(2),
    },
}));

const StopsList = ({stops, no_items}) => {
    const classes = useStyles();

    return (
        <Grid container justify="center" spacing={3}>
            {stops ?
                stops.length === 0 ?
                    <Grid item xs={12}>
                        {no_items}
                    </Grid>
                    :
                    stops.map(stop => (
                        <Grid key={stop.stop_id} item xs={12} className={classes.listItem}>
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
