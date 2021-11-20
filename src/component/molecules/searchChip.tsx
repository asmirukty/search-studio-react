import {withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";
import React from "react";

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
    label?: string,
    minLabel?: string|null,
    maxLabel?: string|null,
    onDelete: (value: any) => void;
}
export default function SearchChip(props: SearchChipProps) {
    const {label, minLabel, maxLabel, onDelete} = props;

    return (
        <div>
            {
                label && <Chip size='small' label={label} onDelete={onDelete}/>

            }
            {
            (minLabel || maxLabel) &&
            <Chip size='small' onDelete={onDelete}
                        label={
                            (minLabel && maxLabel) ? `${minLabel}~${maxLabel}` : (
                                (minLabel) ? `${minLabel}~` : `~${maxLabel}`)
                        }
            />
        }
        </div>
    )
}