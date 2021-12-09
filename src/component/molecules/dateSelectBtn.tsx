import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useSetRecoilState, useRecoilState} from "recoil";
import {addDateOpenState, dateState} from "../atom";
import SearchOutlineButton from "../atoms/searchOutlineButton";

const useStyles = makeStyles(() =>
    createStyles({
        buttons: {
            display: 'flex',
            justifyContent: 'center'
        }
    }));

interface DateSelectBtnProps {
    index: number,
    date: boolean
}

export default function DateSelectBtn(props: DateSelectBtnProps) {
    const classes = useStyles();
    const {index} = props;
    const setDate = useSetRecoilState<{date: Date, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateState);
    const [addDateOpen, setAddDateOpen] = useRecoilState<boolean[]>(addDateOpenState);

    const reset = () => {
        setDate(prevState => prevState.filter((element, idx) => idx !== index))
        addDateOpen.length > 1 &&
        setAddDateOpen(prevState => prevState.filter((element, idx) => idx !== prevState.length - 1))
    }

    const addDate = () => {
        setAddDateOpen(prevState => [...prevState, true])
    }

    return (
            <div className={classes.buttons}>
                <SearchOutlineButton label={'× 削除'} onClick={reset}/>
                {
                    index !== 4 &&
                    <SearchOutlineButton label={'+ 追加'} onClick={addDate} disabled={props.date || addDateOpen[index+1]}/>
                }
            </div>
    );
}