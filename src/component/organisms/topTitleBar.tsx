import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
    createStyles({
        bar: {
            backgroundColor:'#1D356A',
            display: 'flex',
            justifyContent: 'space-between',
            color: '#F9F5F0',
        }
    })
);

export default function TopTitleBar() {
    const classes = useStyles();

    return (
            <AppBar position="fixed">
                <Toolbar className={classes.bar}>
                    <Typography variant="h6">
                        Dance Search
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    );
}
