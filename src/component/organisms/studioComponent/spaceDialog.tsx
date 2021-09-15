import React, {useState} from 'react';
import { Typography, DialogContent } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MinAreaSelect from "./spaceDialogComponent/minAreaSelect";
import MaxAreaSelect from "./spaceDialogComponent/maxAreaSelect";
import MinPeopleSelect from "./spaceDialogComponent/minPeopleSelect";
import MaxPeopleSelect from "./spaceDialogComponent/maxPeopleSelect";
import SearchDialog from "../searchDialog";
import MinMaxSelect from "../minMaxSelect";

const useStyles = makeStyles(() =>
    createStyles( {
        content: {
            color: "#5A4628",
            padding: '24px 24px 8px',
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset'
        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        }
}));

export default function SpaceDialog() {
    const classes = useStyles()

    const [minArea, setMinArea] = useState()

    return (
        <div>
            <SearchDialog label={'面積/人数を選択'} btn={'btn'}>
                    <DialogContent className={classes.content}>
                        <Typography className={classes.typ} variant={'subtitle1'}>面積</Typography>
                        <MinMaxSelect min={<MinAreaSelect/>} max={<MaxAreaSelect/>}/>
                        <Typography className={classes.typ} variant={'subtitle1'}>人数</Typography>
                        <MinMaxSelect min={<MinPeopleSelect/>} max={<MaxPeopleSelect/>}/>
                    </DialogContent>
            </SearchDialog>
        </div>
    );
}