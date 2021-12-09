import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '32px 0 0'
        }
    })
)

export default function StudioResultTitle() {
    const classes = useStyles();

    return (
        <Typography variant={'h3'} className={classes.title}>
            検索結果
        </Typography>
    );
}