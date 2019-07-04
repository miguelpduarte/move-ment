import React from "react";
import PropTypes from "prop-types";
import { Paper, TableRow, TableHead, TableCell, TableBody, Table, Typography } from "@material-ui/core";
import SimplePaperMessage from "../SimplePaperMessage";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    asteriskExplanation: {
        marginTop: theme.spacing(1),
        textAlign: "right",
    },
}));

const StopScheduleTable = ({schedule}) => {
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
                            <TableCell>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedule.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.line}
                                </TableCell>
                                <TableCell>{row.direction}</TableCell>
                                <TableCell>{row.time}</TableCell>
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
