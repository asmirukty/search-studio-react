import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '16px 0 28px'
        }
    })
)

export default function StudioSearchTitle() {
    const classes = useStyles();

    return (
        <Typography variant={'h3'} className={classes.title}>スタジオを検索</Typography>
    );
}