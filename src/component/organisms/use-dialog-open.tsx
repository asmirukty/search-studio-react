import {useEffect, useState} from 'react'

export default function useDialogOpen (initialState: boolean, funcs: ((state: any) => void)[], state: any[], openCheck: (open: boolean) => void):
    [boolean, () => void, () => void, () => void]{
    const [open, setOpen] = useState(initialState)

    useEffect(() => {
        openCheck(open)
    }, [open])

    const dialogOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleOk = () => {
        setOpen(false);
        funcs.map((func, index) => {
            func(state[index])
        })
    };

    return [open, dialogOpen, handleCancel, handleOk]
}