import {useEffect} from 'react'
import useEventTarget from "./use-event-target";

export default function useRangeSelect (open: boolean, initialMin: any, initialMax: any, deleteProp: () => void) : [
    any,
    any,
    (event: any) => void,
    (event: any) => void,
    () => void,
]　{
    const [min, setMin, changeMin] = useEventTarget(initialMin)
    const [max, setMax, changeMax] = useEventTarget(initialMax)

    useEffect(() => {
        if (!open) {
            setMin(initialMin)
            setMax(initialMax)
        }
    }, [open])

    const deleteChip = () => {
        setMin(null)
        setMax(null)
        deleteProp()
    }

    return [min, max, changeMin, changeMax, deleteChip]
}