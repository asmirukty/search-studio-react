import {useState} from 'react'

export default function useValue (initialState: any, boolean?: boolean):
    [any, (newValue: any) => void, () => void]{
    const [value, setValue] = useState(initialState)

    const changeValue = (newValue: any) => {
        setValue(newValue)
    }

    const deleteValue = () => {
        boolean ? setValue(false) : setValue(null)
    }

    return [value, changeValue, deleteValue]
}