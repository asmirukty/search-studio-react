import {useState} from 'react'

export default function useArrayValue (initialState: any[]): [any[], (arg0: any) => void, (arg0: any) => void]{
    const [value, setValue] = useState(initialState)

    const changeValue = (value: any[]) => {
        setValue(value)
    }

    const deleteValue = (value: any) => {
        setValue(prevState => (
            prevState.filter((element: any) => element != value)
        ))
    }

    return [value, changeValue, deleteValue]
}