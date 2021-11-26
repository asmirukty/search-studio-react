import {useState} from 'react'

export default function useArrayValue (initialState: any[]):
    [any[], (newValue: any) => void, (deleteValue: any) => void]{
    const [value, setValue] = useState(initialState)

    const changeValue = (newValue: any[]) => {
        setValue(newValue)
    }

    const deleteValue = (deleteValue: any) => {
        setValue(prevState => (
            prevState.filter((element: any) => element !== deleteValue)
        ))
    }

    return [value, changeValue, deleteValue]
}