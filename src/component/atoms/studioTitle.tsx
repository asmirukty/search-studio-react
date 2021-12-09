import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            position: 'sticky',
            top: 120,
            zIndex: 1000,
            margin: 16
        }
    })
);

export default function StudioTitle(props: {studio: string}) {
    const classes = useStyles();

    return (
        <Typography variant={'h3'} className={classes.title}>
            {props.studio}
        </Typography>
    );
}