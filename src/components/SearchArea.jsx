import React from "react";
import { useSearch } from "../hooks/search";
import { searchByStops } from "../requests/move_me_api";
import ClearableSearchBar from "./ClearableSearchBar";
import StopsList from "./StopsList";
import { Grid, LinearProgress } from "@material-ui/core";
import SimplePaperMessage from "./SimplePaperMessage";

// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//     root: {
//         margin: "0 auto",
//         flexGrow: 1
//     },
// });

const SearchArea = () => {
    const [search_results, search_query, setSearchQuery, error, loading] = useSearch(searchByStops);

    return (
        <Grid container alignItems="stretch" justify="center">
            <Grid item xs={12} md={8}>
                <ClearableSearchBar
                    placeholder="Search for a Stop"
                    search_query={search_query}
                    setSearchQuery={setSearchQuery}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                {loading ? <LinearProgress/> : <React.Fragment/>}
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
