import {useState} from 'react'

function useActionValue (initialState: string): [string, (arg0: any) => void]{
    const [value, setValue] = useState(initialState)
    const changeValue = (event: any) => {
        setValue(event.target.value)
    }
    //const resetValue = () => {
    //    setValue(props.initialState)
    //}
    return [value, changeValue,
        //resetValue
    ]
}

export default useActionValue