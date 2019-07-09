import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Divider } from "@material-ui/core";
import { Search as SearchIcon, Clear as ClearIcon } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
    },
    input: {
        marginLeft: 8,
        flex: 1,
        padding: 10,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        width: 1,
        margin: 4,
    },
});

const ClearableSearchBar = ({placeholder, search_query, setSearchQuery}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={placeholder}
                inputProps={{ "aria-label": placeholder }}
                fullWidth
                value={search_query}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <IconButton className={classes.iconButton} onClick={() => {setSearchQuery("");}} aria-label="Clear">
                <ClearIcon />
            </IconButton>
            <Divider className={classes.divider} />
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default ClearableSearchBar;
