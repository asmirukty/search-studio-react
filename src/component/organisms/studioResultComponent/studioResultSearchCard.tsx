import {Card, Chip, CardContent, Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioResultDialog from "./studioResultDialog";
import {useRecoilValue} from "recoil";
import {cityChipState, lineChipState, prefectureChipState, stationChipState} from "../searchCardComponent/atom";

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

export default function StudioResultSearchCard() {
    const classes = useStyles();
    const prefectureChip =  useRecoilValue(prefectureChipState);
    const cityChip = useRecoilValue(cityChipState);
    const lineChip = useRecoilValue(lineChipState);
    const stationChip = useRecoilValue(stationChipState);


    return (
        <Card className={classes.topCard}>
            <CardContent className={classes.card}>
                <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>検索条件</Typography>
                <div className={classes.spaceBetween}>
                    <div className={classes.wrapChip}>
                        {
                            prefectureChip.length > 0 && prefectureChip.map((item) =>
                                <Chip size='small' key={item} label={item.name} className={classes.chip}/>)
                        }
                        {
                            cityChip.length > 0 && cityChip.map((item) =>
                                <Chip size='small' key={item} label={item.name} className={classes.chip}/>)
                        }
                        {
                            lineChip.length > 0 && lineChip.map((item) =>
                                <Chip size='small' key={item} label={item.name} className={classes.chip}/>)
                        }
                        {
                            stationChip.length > 0 && stationChip.map((item) =>
                                <Chip size='small' key={item} label={item.name} className={classes.chip}/>)
                        }
                    </div>
                    <StudioResultDialog/>
                </div>
            </CardContent>
        </Card>
    )
}