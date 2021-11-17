import {useEffect, useState} from 'react'

export default function useRangeSelect (open: boolean, initialMin: any, initialMax: any, deleteProp: () => void) : [
    any,
    any,
    (event: any) => void,
    (event: any) => void,
    () => void,
]　{
    const [min, setMin] = useState(initialMin)
    const [max, setMax] = useState(initialMax)

    useEffect(() => {
        if (!open) {
            setMin(initialMin)
            setMax(initialMax)
        }
    }, [open])

    const changeMin = (event: any) : void => {
        event.target.value === ('下限なし'||'指定なし') ? setMin(null) : setMin(event.target.value)
    };

    const changeMax = (event: any) : void => {
        event.target.value === ('上限なし'||'指定なし') ? setMax(null) : setMax(event.target.value)
    };

    const deleteChip = () => {
        setMin(null)
        setMax(null)
        deleteProp()
    }

    return [min, max, changeMin, changeMax, deleteChip]
}