import {Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {AccessTime} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
        desc: {
            padding: '4px 0 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }
    }))

export default function SlotTime(props: {minutes: number}) {
    const classes = useStyles();

    return (
        <div　className={classes.desc}>
            <AccessTime fontSize='small'/>
            <Typography variant='caption' style={{padding: '0px 2px'}}>
                {props.minutes + "分~"}
            </Typography>
        </div>
    )
}