import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SimplePaperMessage from "./SimplePaperMessage";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto",
    },
    table: {
        // minWidth: 650,
    },
}));

const StopScheduleTable = ({schedule}) => {
    const classes = useStyles();

    return (
        <>
        {schedule.length === 0 ?
            <SimplePaperMessage message="No arrivals found!"/>
            :
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Line</TableCell>
                            <TableCell align="right">Direction</TableCell>
                            <TableCell align="right">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedule.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.line}
                                </TableCell>
                                <TableCell align="right">{row.direction}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        }
        </>
    );
};

StopScheduleTable.propTypes = {
    schedule: PropTypes.arrayOf(PropTypes.object)
};

export default StopScheduleTable;
