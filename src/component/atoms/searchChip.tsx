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
    label: any|null,
    pre?: string,
    after?: string|null,
    onDelete: (value: any) => void;
}
export default function SearchChip(props: SearchChipProps) {
    const {label, pre, after, onDelete} = props;

    return (
        <div>
            {
                label ?
                    <Chip size='small' onDelete={onDelete} label={`${pre ? pre : ''}${label}${after ? after : ''}`}/>
                    : null
            }
        </div>
    )
}