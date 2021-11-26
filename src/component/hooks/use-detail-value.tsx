import {useEffect, useState} from 'react'

export default function useDetailValue (search: boolean, detailCheck: any[], options: any[]): [any[]]{
    const [value, setValue] = useState<any[]>([])

    useEffect(() => {
        setValue([])
        options.map((option) => {
            detailCheck.includes(option) && setValue(prevState => [...prevState, option])
        })
    }, [search])

    return [value]
}