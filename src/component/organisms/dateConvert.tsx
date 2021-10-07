interface DateProps {
    date: number
}

export default function DateConvert(props: DateProps) {
        if (new Date(props.date).getDay() === 1) {
        return <div>{ new Date(props.date).getMonth()+1 }/{ new Date(props.date).getDate() }(月)</div>
        }
        else if (new Date(props.date).getDay() === 2) {
            return <div>{ new Date(props.date).getMonth()+1 }/{ new Date(props.date).getDate() }(火)</div>
        }
        else if (new Date(props.date).getDay() === 3) {
            return <div>{ new Date(props.date).getMonth()+1 }/{ new Date(props.date).getDate() }(水)</div>
        }
        else if (new Date(props.date).getDay() === 4) {
            return <div>{ new Date(props.date).getMonth()+1 }/{ new Date(props.date).getDate() }(木)</div>
        }
        else if (new Date(props.date).getDay() === 5) {
            return <div>{ new Date(props.date).getMonth()+1 }/{ new Date(props.date).getDate() }(金)</div>
        }
        else if (new Date(props.date).getDay() === 6) {
            return <div>{ new Date(props.date).getMonth()+1 }/{ new Date(props.date).getDate() }(土)</div>
        }
        else {
            return <div>{ new Date(props.date).getMonth()+1 }/{ new Date(props.date).getDate() }(日)</div>
        }
}