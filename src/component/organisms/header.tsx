import {createStyles, makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        bar: {
            backgroundColor:'#1D356A',
            justifyContent: 'space-between',
            color: '#F9F5F0',
            minHeight: 56
        }
    })
);

export default function Header() {
    const classes = useStyles();

    return (
            <AppBar position="sticky" style={{minWidth: 320}}>
                <Toolbar className={classes.bar}>
                    <Typography variant="h6">Dance Search</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    );
}
