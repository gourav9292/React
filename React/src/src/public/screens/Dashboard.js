import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    tableHead: {
        background: '#ccc9'
    }
});


export default function Dashboard() {
    const classes = useStyles();
    let users = useSelector(state => state).user.users;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell >Email</TableCell>
                        <TableCell >Id</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Gender</TableCell>
                        <TableCell >Age</TableCell>
                        <TableCell >Contact</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.email}</TableCell>
                            <TableCell >{row.id}</TableCell>
                            <TableCell >{row.name}</TableCell>
                            <TableCell >{row.gender}</TableCell>
                            <TableCell >{row.age}</TableCell>
                            <TableCell >{row.phoneNo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}