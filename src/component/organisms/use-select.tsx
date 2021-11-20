import {useEffect} from 'react'
import useEventTarget from "./use-event-target";

export default function useSelect (open: boolean, initialValue: any, deleteProp: () => void) : [
    any, (event: any) => void, () => void]　{
    const [value, setValue, changeValue] = useEventTarget(initialValue)

    useEffect(() => {
        if (!open) {
            setValue(initialValue)
        }
    }, [open])

    const deleteChip = () => {
        setValue(null)
        deleteProp()
    }

    return [value, changeValue, deleteChip]
}