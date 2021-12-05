import {withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4,
    }
})(MuiChip);

interface ResultChipProps {
    label: string|null,
    pre?: string,
}
export default function ResultChip(props: ResultChipProps) {
    const {label, pre} = props;

    return (
        <div>
            {
                label && <Chip size='small'
                               label={pre ? `${pre}${label}` : label}/>
            }
        </div>
    )
}