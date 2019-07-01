import React, { useState } from "react";
import { getFavorites } from "../utils/favoriteStateManager";
import { Grid, Typography } from "@material-ui/core";
import StopsList from "./StopsList";
import SimplePaperMessage from "./SimplePaperMessage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    titleContainer: {
        marginBottom: theme.spacing(3),
    },
}));

const FavoritesList = () => {
    const [favorite_stops] = useState(getFavorites);
    const classes = useStyles();

    return (
        <Grid container alignItems="stretch" justify="center">
            <Grid item xs={12} md={8} className={classes.titleContainer}>
                <Typography variant="h3">
                    Favorite Stops:
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <StopsList
                    stops={favorite_stops}
                    no_items={(<SimplePaperMessage message="No stops favorited yet!" />)}
                />
            </Grid>
        </Grid>
    );
};

export default FavoritesList;
