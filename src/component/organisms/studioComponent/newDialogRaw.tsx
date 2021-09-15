import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
    createStyles( {
        content: {
            color: "#5A4628",
            padding: '24px 24px 8px',
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset'
        },
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            marginBottom: 12
        },
        formControl: {
            margin: 4,
            minWidth: 120,
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px",
            padding: '2px 7px'
        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
        menuPaper: {
            maxHeight: 300
        }
    }));

interface DialogRawProps {
    newChip: string[];
    chipChange: (value?: any) => void;
}

export default function NewDialogRaw(props: DialogRawProps) {
    const classes = useStyles();
    const { chipChange, newChip: newChipProp } = props;
    const [chip, setChip] = React.useState<string[]>([]);

    React.useEffect(() => {
            setChip(newChipProp);
    }, [newChipProp]);

    const chipHandleChange = (event: any) : void => {

        console.log(event.target.value as string)
        chipChange(event.target.value as string)
    };

    return (
            <div className={classes.selectEmpty}>
                <Button value='test1' onClick={chipHandleChange}>1</Button>
                <Button value='test2' onClick={chipHandleChange}>2</Button>
            </div>
    );
}

