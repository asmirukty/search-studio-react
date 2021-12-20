import {withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        margin: '1px 2px'
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

interface SearchChipProps {
    label: any|null,
    pre?: string,
    after?: string|null,
    onDelete?: (value: any) => void;
}

export default function SearchChip(props: SearchChipProps) {
    const {label, pre, after, onDelete} = props;

    return (
        label ?
            <Chip size='small' onDelete={onDelete} label={`${pre ? pre : ''}${label}${after ? after : ''}`}/>
            : null
    );
}