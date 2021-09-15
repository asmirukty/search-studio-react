import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() =>
    createStyles( {
        select: {
            color: "#5A4628",
            display: 'flex',
            alignItems: 'flex-end',
            marginBottom: '12px'
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
        menuPaper: {
            maxHeight: 300
        }
    }));

interface MinMaxSelectProps {
    children?: React.ReactNode;
    minOptions: string[];
    min: any;
    maxOptions: string[];
    max: any;
    newSelect: (value?: any) => void;
}

export default function NewMinMaxSelect(props: MinMaxSelectProps) {
    const classes = useStyles()
    const { newSelect, min: minProp, max: maxProp } = props;
    const [min, setMin] = React.useState();
    const [max, setMax] = React.useState();

    React.useEffect(() => {
        setMin(minProp);
        setMax(maxProp);
    }, [minProp, maxProp]);

    const minHandleChange = (event: any) : void => {
        setMin(event.target.value);
        newSelect(event.target.value);
    };

    const maxHandleChange = (event: any) : void => {
        setMax(event.target.value);
    }

    return (
        <div className={classes.select}>
            <FormControl className={classes.formControl}>
                <Select
                    value={min}
                    onChange={minHandleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    MenuProps={{ classes: { paper: classes.menuPaper } }}
                >
                    {props.minOptions.map((option: any) => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <p>~</p>
            <FormControl className={classes.formControl}>
                <Select
                    value={max}
                    onChange={maxHandleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    MenuProps={{ classes: { paper: classes.menuPaper } }}
                >
                    {props.maxOptions.map((option: any) => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}