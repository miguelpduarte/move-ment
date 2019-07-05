import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, List, SwipeableDrawer, IconButton, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link as GLink } from "gatsby";
import { Menu as MenuIcon, Flag, DirectionsBus, Info, Star } from "@material-ui/icons";
import DarkModeSwitch from "./DarkModeSwitch";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(4),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        color: "inherit",
        textDecoration: "none",
    },
    title: {
        flexGrow: 1,
        display: "inline",
        color: "inherit"
    },
    drawer: {
        width: "17rem",
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
        <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <div
                className={classes.drawer}
                role="presentation"
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
            >
                <List>
                    {[
                        {text: "Search for Stops", href: "/", icon: Flag},
                        {text: "Search for Lines (WIP)", href: "/lines", icon: DirectionsBus},
                        {text: "Favorites", href: "/favorites", icon: Star},
                        {text: "About", href: "/about", icon: Info},
                    ].map((item) => (
                        <ListItem button component={GLink} to={item.href} key={item.text}>
                            <ListItemIcon>{<item.icon/>}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                    
                    <DarkModeSwitch/>
                </List>
            </div>
        </SwipeableDrawer>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <GLink to="/" className={classes.link}>
                        <Typography variant="h5" className={classes.title}>
                            move-ment
                        </Typography>
                    </GLink>
                </Toolbar>
            </AppBar>
        </div>
        </>
    );
};

export default Navbar;