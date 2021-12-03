import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {maxAreaOptions, maxPeopleOptions, minAreaOptions, minPeopleOptions} from "./itemsAndOptions/spaceOptions";
import {useRecoilState} from "recoil";
import {maxAreaState, maxPeopleState, minAreaState, minPeopleState} from "./atom";
import MinMaxSelect from "../../molecules/minMaxSelect";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        }
    }));

export default function SpaceDialogContent() {
    const classes = useStyles()
    const [minArea, setMinArea] = useRecoilState<number|null>(minAreaState);
    const [maxArea, setMaxArea] = useRecoilState<number|null>(maxAreaState);
    const [minPeople, setMinPeople] = useRecoilState<number|null>(minPeopleState);
    const [maxPeople, setMaxPeople] = useRecoilState<number|null>(maxPeopleState);

    const changeMinArea = (event: any) => {
        event.target.value === minAreaOptions[0] ? setMinArea(null) : setMinArea(event.target.value)
    }

    const changeMaxArea = (event: any) => {
        event.target.value === maxAreaOptions[0] ? setMaxArea(null) : setMaxArea(event.target.value)
    }

    const changeMinPeople = (event: any) => {
        event.target.value === minPeopleOptions[0] ? setMinPeople(null) : setMinPeople(event.target.value)
    }

    const changeMaxPeople = (event: any) => {
        event.target.value === maxPeopleOptions[0] ? setMaxPeople(null) : setMaxPeople(event.target.value)
    }

    return (
          <div style={{padding: '20px 24px 8px'}}>
              <Typography className={classes.typ} variant={'subtitle1'}>面積</Typography>
              <MinMaxSelect min={minArea} max={maxArea}
                            minOptions={minAreaOptions} maxOptions={maxAreaOptions} unit={'m²'}
                            minNullValue={0} maxNullValue={0} disableEqual
                            changeMin={changeMinArea} changeMax={changeMaxArea}/>
              <Typography className={classes.typ} variant={'subtitle1'}>人数</Typography>
              <MinMaxSelect min={minPeople} max={maxPeople}
                            minOptions={minPeopleOptions} maxOptions={maxPeopleOptions}　unit={'人'}
                            minNullValue={0} maxNullValue={0}
                            changeMin={changeMinPeople} changeMax={changeMaxPeople}/>
          </div>
    )
}