import {useEffect, useState} from 'react'

export default function useCheck (
    open: boolean,
    initialCheckedItem: any[],
    deleteCheckedProp: (item: string) => void,
) : [
    any[],
    (newItem: string) => void,
    (deleteItem: string) => void,
    (deleteItem: string) => () => void,
]　{
    const [checkedItem, setCheckedItem] = useState<any[]>(initialCheckedItem)

    useEffect(() => {
        if (!open) {
            setCheckedItem(initialCheckedItem)
            console.log(initialCheckedItem)
        }
    }, [open])

    const check = (newItem: string) : void => {
        setCheckedItem(prevState => (
            [...prevState, newItem]
        ))
    };

    const unCheck = (deleteItem: string) : void => {
        setCheckedItem(prevState => (
            prevState.filter((element: string) => {
                return element !== deleteItem
            })
        ))
    }

    const deleteChip = (deleteItem: string) => () : void => {
        setCheckedItem(prevState => (
            prevState.filter((element: string) => {
                return element !== deleteItem
            })
        ))
        deleteCheckedProp(deleteItem)
    }

    return [checkedItem, check, unCheck, deleteChip]
}