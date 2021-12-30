import {Place} from "@material-ui/icons";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import BoldTypography from "../atoms/boldTypography";
import SmallTypography from "../atoms/smallTypography";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '0px 8px',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #D7D2C8',
            margin: '0 -8px'
        }
    }))

interface StudioResultStudioTitleProps {
    studio: string;
    station: string;
    exit: string;
    fromStation: number;
}

export default function StudioResultCardTop(props: StudioResultStudioTitleProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BoldTypography>{props.studio}</BoldTypography>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Place fontSize='small'/>
                <SmallTypography>
                    {props.station}{props.exit}徒歩{props.fromStation}分
                </SmallTypography>
            </div>
        </div>
    );
}