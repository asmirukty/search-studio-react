import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Close} from "@material-ui/icons";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() =>
    createStyles( {
        right: {
            textAlign: 'right'
        },
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        detailBtn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '3px 4px',
            margin: '0 0 8px',
        },
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        dialogClose: {
            color: '#5A4628',
            minWidth: 20,
            padding: 0
        },
        dialogOk: {
            color: '#5A4628',
            fontSize: 14,
            fontWeight: 'bold',
            minWidth: 20,
            padding: '0 4px'
        },
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

interface SpaceDialogRawProps {
    classes: Record<'paper', string>;
    id: string;
    keepMounted: boolean;
    area: string;
    people: string;
    open: boolean;
    areaOnClose: (value?: any) => void;
    peopleOnClose: (value?: any) => void;
}

const minAreaOptions = [
    '下限なし', '10m²',　'15m²', '20m²', '25m²', '30m²', '40m²', '50m²',
    '60m²', '80m²', '100m²', '120m²', '150m²'
];

const maxAreaOptions = [
    '上限なし', '10m²',　'15m²', '20m²', '25m²', '30m²', '40m²', '50m²',
    '60m²', '80m²', '100m²', '120m²', '150m²'
];

const minPeopleOptions = [
    '下限なし', '1人',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人'
];

const maxPeopleOptions = [
    '上限なし',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人'
];

export default function NewSpaceDialogRaw(props: SpaceDialogRawProps) {
    const classes = useStyles()
    const { areaOnClose, peopleOnClose,
        area: areaProp, people: peopleProp,
        open, ...other } = props;
    const [minArea, setMinArea] = React.useState('下限なし');
    const [maxArea, setMaxArea] = React.useState('上限なし');
    const [minPeople, setMinPeople] = React.useState('下限なし');
    const [maxPeople, setMaxPeople] = React.useState('上限なし');
    //const radioGroupRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (!open) {
            if (areaProp === '') {
                setMinArea('下限なし');
                setMaxArea('上限なし');
            }
            if (peopleProp === '') {
                setMinPeople('下限なし');
                setMaxPeople('上限なし');
            }
        }
    }, [areaProp, peopleProp, open]);


    const handleCancel = () => {
        areaOnClose();
        peopleOnClose();
    };

    const handleOk = () => {
        if (minArea !== '下限なし' && maxArea !== '上限なし') {
            areaOnClose(minArea + '~' + maxArea);
        }
        else if (minArea !== '下限なし' && maxArea === '上限なし') {
            areaOnClose(minArea + '~')
        }
        else if (minArea === '下限なし' && maxArea !== '上限なし') {
            areaOnClose('~' + maxArea)
        }
        if (minPeople !== '下限なし' && maxPeople !== '上限なし') {
            peopleOnClose(minPeople + '~' + maxPeople);
        }
        else if (minPeople !== '下限なし' && maxPeople === '上限なし') {
            peopleOnClose(minPeople + '~')
        }
        else if (minPeople === '下限なし' && maxPeople !== '上限なし') {
            peopleOnClose('~' + maxPeople)
        }
    };

    const minAreaHandleChange = (event: any) : void => {
        setMinArea(event.target.value);
    };

    const maxAreaHandleChange = (event: any) : void => {
        setMaxArea(event.target.value);
    };

    const minPeopleHandleChange = (event: any) : void => {
        setMinPeople(event.target.value);
    };

    const maxPeopleHandleChange = (event: any) : void => {
        setMaxPeople(event.target.value);
    };

    return (
        <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}}
               // onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogActions className={classes.dialogBtn}>
                <Button autoFocus onClick={handleCancel} className={classes.dialogClose}>
                    <Close fontSize='small'/>
                </Button>
                <Button onClick={handleOk} className={classes.dialogOk}>
                    決定
                </Button>
            </DialogActions>
            <DialogContent className={classes.content}>
                <Typography className={classes.typ} variant={'subtitle1'}>面積</Typography>
                <div className={classes.select}>
                    <FormControl className={classes.formControl}>
                            <Select
                                value={minArea}
                                onChange={minAreaHandleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    minAreaOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={maxArea !== '上限なし' && index >= maxAreaOptions.indexOf(maxArea)}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    <p>~</p>
                    <FormControl className={classes.formControl}>
                        <Select
                                value={maxArea}
                                onChange={maxAreaHandleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {
                                maxAreaOptions.map((option: any, index) => (
                                    <MenuItem value={option} key={index}
                                              disabled={index !== 0 && index <= minAreaOptions.indexOf(minArea)}>
                                        {option}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
                <Typography className={classes.typ} variant={'subtitle1'}>人数</Typography>
                <div className={classes.select}>
                    <FormControl className={classes.formControl}>
                        <Select
                            //ref={radioGroupRef}
                                value={minPeople}
                                onChange={minPeopleHandleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {
                                minPeopleOptions.map((option: any, index) => (
                                    <MenuItem value={option} key={index}
                                              disabled={maxPeople !== '上限なし' && index > maxPeopleOptions.indexOf(maxPeople)}>
                                        {option}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <p>~</p>
                    <FormControl className={classes.formControl}>
                        <Select
                            //ref={radioGroupRef}
                                value={maxPeople}
                                onChange={maxPeopleHandleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {
                                maxPeopleOptions.map((option: any, index) => (
                                    <MenuItem value={option} key={index}
                                              disabled={index !== 0 && index < minPeopleOptions.indexOf(minPeople)}>{option}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
            </DialogContent>

        </Dialog>
    );
}

