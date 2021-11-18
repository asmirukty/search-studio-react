import {withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4,
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

interface SearchChipProps {
    label: string,
    onDelete: (value: any) => void;
}
export default function SearchChip(props: SearchChipProps) {
    return (
        <Chip size='small' label={props.label} onDelete={props.onDelete}/>
    )
}