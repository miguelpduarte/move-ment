import React from "react";
import { useSearch } from "../hooks/search";
import { searchByStops } from "../requests/move_me_api";
import ClearableSearchBar from "./ClearableSearchBar";
import StopResultsList from "./StopResultsList";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimplePaperMessage from "./SimplePaperMessage";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
});

const SearchArea = () => {
    const classes = useStyles();
    const [search_results, search_query, setSearchQuery, error] = useSearch(searchByStops);

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignContent="center" alignItems="stretch" spacing={3}>
                <Grid item xs={12}>
                    <ClearableSearchBar
                        placeholder="Search for a Stop"
                        search_query={search_query}
                        setSearchQuery={setSearchQuery}
                    />
                </Grid>
                <Grid item xs={12}>
                    {error ?
                        <SimplePaperMessage message="An error ocurred!"/>
                        :
                        <StopResultsList search_results={search_results} />
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchArea;
