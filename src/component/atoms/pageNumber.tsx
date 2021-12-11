import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '4px 0 12px'
        }
    })
)

export default function PageNumber(props: {pages: number}) {
    const classes = useStyles();

    return (
        <Typography variant={'subtitle2'} className={classes.title}>
            全{props.pages}件
        </Typography>
    );
}