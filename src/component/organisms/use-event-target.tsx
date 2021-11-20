import {Dispatch, SetStateAction, useState} from 'react'

export default function useEventTarget (initialValue: any) : [any, Dispatch<SetStateAction<any>>, (event: any) => void]　{
    const [value, setValue] = useState(initialValue)

    const changeValue = (event: any) : void => {
        event.target.value === ('下限なし'||'上限なし'||'指定なし') ? setValue(null) : setValue(event.target.value)
    };

    return [value, setValue, changeValue]
}