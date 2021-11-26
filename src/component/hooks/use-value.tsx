import {useState} from 'react'

export default function useValue (initialState: any):
    [any, (newValue: any) => void, () => void]{
    const [value, setValue] = useState(initialState)

    const changeValue = (newValue: any) => {
        setValue(newValue)
    }

    const deleteValue = () => {
        setValue(null)
    }

    return [value, changeValue, deleteValue]
}