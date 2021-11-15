import {useState} from 'react'

export default function useDialogOpen (initialState: boolean, funcs: ((state: any) => void)[], state: any[]):
    [boolean, () => void, () => void, () => void]{
    const [open, setOpen] = useState(initialState)

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