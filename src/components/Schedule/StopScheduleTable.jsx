import React from "react";
import PropTypes from "prop-types";
import { Paper, TableRow, TableHead, TableCell, TableBody, Table } from "@material-ui/core";
import SimplePaperMessage from "../SimplePaperMessage";

const StopScheduleTable = ({schedule}) => {

    return (
        <>
        {schedule.length === 0 ?
            <SimplePaperMessage message="No arrivals found!"/>
            :
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
        }
        </>
    );
};

StopScheduleTable.propTypes = {
    schedule: PropTypes.arrayOf(PropTypes.object)
};

export default StopScheduleTable;
