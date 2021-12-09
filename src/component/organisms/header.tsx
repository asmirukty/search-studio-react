import {createStyles, makeStyles} from "@material-ui/core/styles";
import {AppBar, Toolbar} from "@material-ui/core";
import HeaderTitle from "../atoms/headerTitle";
import LoginButton from "../atoms/loginButton";

const useStyles = makeStyles(() =>
    createStyles({
        bar: {
            backgroundColor:'#1D356A',
            justifyContent: 'space-between',
            color: '#F9F5F0',
        }
    })
);

export default function Header() {
    const classes = useStyles();

    return (
            <AppBar position="fixed">
                <Toolbar className={classes.bar}>
                    <HeaderTitle/>
                    <LoginButton/>
                </Toolbar>
            </AppBar>
    );
}
