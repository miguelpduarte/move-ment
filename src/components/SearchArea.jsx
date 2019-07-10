import React from "react";
import { useSearch } from "../hooks/search";
import { searchByStops } from "../requests/move_me_api";
import ClearableSearchBar from "./ClearableSearchBar";
import StopsList from "./StopsList";
import { Grid, LinearProgress } from "@material-ui/core";
import SimplePaperMessage from "./SimplePaperMessage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    searchBarContainer: {
        marginBottom: theme.spacing(3),
    },
}));

const SearchArea = () => {
    const [search_results, search_query, setSearchQuery, error, loading] = useSearch(searchByStops);
    const classes = useStyles();

    return (
        <Grid container alignItems="stretch" justify="center">
            <Grid item xs={12} md={8} className={classes.searchBarContainer}>
                <ClearableSearchBar
                    placeholder="Search for a Stop"
                    search_query={search_query}
                    setSearchQuery={setSearchQuery}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <LinearProgress style={loading ? {} : {opacity: 0}}/>
                {error ?
                    <SimplePaperMessage message={error}/>
                    :
                    <StopsList stops={search_results} />
                }
            </Grid>
        </Grid>
    );
};

export default SearchArea;
