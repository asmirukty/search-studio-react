import {AccessTime} from "@material-ui/icons";
import SmallTypography from "../atoms/smallTypography";

export default function SlotTime(props: {minutes: number}) {
    return (
        <div　style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <AccessTime fontSize='small'/>
            <SmallTypography margin={'0px 2px'}>{props.minutes + "分~"}</SmallTypography>
        </div>
    );
}