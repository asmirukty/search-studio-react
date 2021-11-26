import {useState} from 'react'

export default function useRangeValue (initialMinState: any, initialMaxState: any):
    [any, any, (newMinValue: any) => void, (newMaxValue: any) => void, () => void]{
    const [minValue, setMinValue] = useState(initialMinState)
    const [maxValue, setMaxValue] = useState(initialMaxState)

    const changeMinValue = (newMinValue: any) => {
        setMinValue(newMinValue)
    }

    const changeMaxValue = (newMaxValue: any) => {
        setMaxValue(newMaxValue)
    }

    const deleteValue = () => {
        setMinValue(null)
        setMaxValue(null)
    }

    return [minValue, maxValue, changeMinValue, changeMaxValue, deleteValue]
}