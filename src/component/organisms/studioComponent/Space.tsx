import NewDialog from "./newDialog";
import React, {useState} from "react";
import NewMinMaxSelect from "../newMinMaxSelect";
import {Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() =>
    createStyles( {
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
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
    })
);

const minAreaOptions = [
    '下限なし', '10m²',　'15m²', '20m²', '25m²', '30m²', '40m²', '50m²',
    '60m²', '80m²', '100m²', '120m²', '150m²',
];

const maxAreaOptions = [
    '上限なし', '10m²',　'15m²', '20m²', '25m²', '30m²', '40m²', '50m²',
    '60m²', '80m²', '100m²', '120m²', '150m²',
];

const minPeopleOptions = [
    '下限なし', '1人',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人',
];

const maxPeopleOptions = [
    '上限なし',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人',
];

export default function Space() {
    const classes = useStyles()
    const [chip, setChip] = useState<string[]>([]);

    const [minArea, setMinArea] = React.useState('下限なし');
    const [maxArea, setMaxArea] = React.useState('上限なし');

    //const newAreaSelect = (newMin: any) => () => {
    //    setMinArea(newMin);
    //    console.log(newMin)
    //};

    const minHandleChange = (event: any) : void => {
        setMinArea(event.target.value);
        if (event.target.value !== '下限なし' && maxArea !=='上限なし') {
            setChip([`${event.target.value}~${maxArea}`])
        }
        if (event.target.value !== '下限なし' && maxArea ==='上限なし') {
            setChip([`${event.target.value}~`])
        }
        if (event.target.value === '下限なし' && maxArea !=='上限なし') {
            setChip([`~${maxArea}`])
        }
        if (event.target.value === '下限なし' && maxArea ==='上限なし') {
            setChip([])
        }
    }

    const maxHandleChange = (event: any) : void => {
        setMaxArea(event.target.value);
        if (minArea !== '下限なし' && event.target.value !=='上限なし') {
            setChip([`${minArea}~${event.target.value}`])
        }
        if (minArea === '下限なし' && event.target.value !=='上限なし') {
            setChip([`~${event.target.value}`])
        }
        if (minArea !== '下限なし' && event.target.value ==='上限なし') {
            setChip([`${minArea}~`])
        }
        if (minArea === '下限なし' && event.target.value ==='上限なし') {
            setChip([])
        }
    }

    const chipDelete = (newItem: string) => () => {
        setChip(prevState => (
            prevState.filter((element: string) => element != newItem)
        ))
        if (newItem) {
            setMinArea('下限なし')
            setMaxArea('上限なし')
        }
    } //chip削除したitemを削除

    return (
        <NewDialog label={'面積・人数を選択'} chip={chip} chipDelete={chipDelete}>
            <Typography className={classes.typ} variant={'subtitle1'}>面積</Typography>
            <div className={classes.select}>
                <FormControl className={classes.formControl}>
                    <Select
                        value={minArea}
                        onChange={minHandleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        MenuProps={{ classes: { paper: classes.menuPaper } }}
                    >
                        {minAreaOptions.map((option: any) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <p>~</p>
                <FormControl className={classes.formControl}>
                    <Select
                        value={maxArea}
                        onChange={maxHandleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        MenuProps={{ classes: { paper: classes.menuPaper } }}
                    >
                        {maxAreaOptions.map((option: any) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </NewDialog>
    )
}