import React from 'react';
import {useSetRecoilState, useRecoilState} from "recoil";
import {addDateOpenState, dateState} from "../atom";
import OutlineButton from "../atoms/outlineButton";

interface DateButtonsProps {
    index: number,
    date: boolean
}

export default function DateAddResetButtons(props: DateButtonsProps) {
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
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <OutlineButton onClick={reset}>× 削除</OutlineButton>
                {
                    index !== 4 &&
                    <OutlineButton onClick={addDate} disabled={props.date || addDateOpen[index+1]}>+ 追加</OutlineButton>
                }
            </div>
    );
}