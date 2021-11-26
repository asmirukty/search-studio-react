import {Card, Chip, CardContent, Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioResultDialog from "./studioResultDialog";

const useStyles = makeStyles(() =>
    createStyles({
        topCard: {
            margin: '0 8px',
            zIndex: 1100,
            position:'sticky',
            top: 108
        },
        card: {
            color: "#5A4628",
            padding: '12px 16px',
            '&:last-child': {
                paddingBottom: 12
            }
        },
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        },
        chip: {
            color: '#5A4628',
            backgroundColor: '#e7e1d8',
            marginRight: 4,
        },
        spaceBetween: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }))

export default function StudioResultSearchCard(props: {items: any[], state: any}) {
    const classes = useStyles();


    return (
        <Card className={classes.topCard}>
            <CardContent className={classes.card}>
                <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>検索条件</Typography>
                <div className={classes.spaceBetween}>
                    <div className={classes.wrapChip}>
                        {
                            props.items.map((item,index) =>
                                <Chip size='small' key={index} label={item.replace('_', '/')} className={classes.chip}/>)
                        }
                    </div>
                    <StudioResultDialog state={props.state}/>
                </div>
            </CardContent>
        </Card>
    )
}