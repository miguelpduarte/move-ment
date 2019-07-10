import React from "react";
import PropTypes from "prop-types";
import { Paper, TableRow, TableHead, TableCell, TableBody, Table, Typography, useMediaQuery, Grid } from "@material-ui/core";
import SimplePaperMessage from "../SimplePaperMessage";
import { makeStyles, useTheme } from "@material-ui/styles";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    asteriskExplanation: {
        marginTop: theme.spacing(1),
        textAlign: "right",
    },
    timeToArrival: {
        marginRight: theme.spacing(2),
    }
}));

/**
 * Calculates the time *of* arrival based on the time *to* arrival
 * @param {String} arrives_in_mins The estimated time to arrival, in the format gotten from the API (number string or number string with a single asterisk to indicate real time)
 * @returns A string representative of the time at which the transport will arrive
 */
const calcTimeOfArrival = (arrives_in_mins) => moment().add(arrives_in_mins.replace("*", ""), "minutes").format("HH:mm");

const StopScheduleTable = ({schedule}) => {
    const theme = useTheme();
    const should_use_collapsed_column = !useMediaQuery(theme.breakpoints.up("sm"));
    const classes = useStyles();
    
    return (
        <>
        {schedule.length === 0 ?
            <SimplePaperMessage message="No arrivals found!"/>
            :
            <>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Line</TableCell>
                            <TableCell>Direction</TableCell>
                            {should_use_collapsed_column ?
                                <TableCell>Arrives in / at</TableCell>
                                :
                            <>
                                <TableCell>Arrives in</TableCell>
                                <TableCell>Arrives at</TableCell>
                            </>
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedule.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.line}
                                </TableCell>
                                <TableCell>{row.direction}</TableCell>
                                {should_use_collapsed_column ?
                                    <TableCell>
                                        <Grid container>
                                            <Grid item xs>{row.time}</Grid>
                                            {/* Removing the asterisks so that the minutes are parsed correctly, even if the result is real-time (would include asterisk) */}
                                            <Grid item xs>{calcTimeOfArrival(row.time)}</Grid>
                                        </Grid>
                                    </TableCell>
                                    :
                                <>
                                    <TableCell>{row.time}</TableCell>
                                    <TableCell>{calcTimeOfArrival(row.time)}</TableCell>
                                </>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Typography variant="body2" className={classes.asteriskExplanation}>
                * Real-Time
            </Typography>
            </>
        }
        </>
    );
};

StopScheduleTable.propTypes = {
    schedule: PropTypes.arrayOf(PropTypes.object)
};

export default StopScheduleTable;
