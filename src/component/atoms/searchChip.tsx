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
    label: string|null,
    pre?: string,
    onDelete: (value: any) => void;
}
export default function SearchChip(props: SearchChipProps) {
    const {label, pre, onDelete} = props;

    return (
        <div>
            {
                label && <Chip size='small' onDelete={onDelete} label={pre ? `${pre}${label}` : label}/>
            }
        </div>
    )
}