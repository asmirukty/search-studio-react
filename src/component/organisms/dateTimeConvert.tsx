import DateConvert from "./dateConvert";

interface DateTimeConvertProps {
    date: Date,
    startTime: string,
    endTime: string
}

export default function DateTimeConvert(props: DateTimeConvertProps) {
    const {date, startTime, endTime} = props;

    if ( startTime !== '指定なし' && endTime !== '指定なし') {
        return `${DateConvert(date)}${startTime}~${endTime}`
    }
    else if (startTime !== '指定なし') {
        return `${DateConvert(date)}${startTime}~`
    }
    else if (endTime !== '指定なし') {
        return `${DateConvert(date)}~${endTime}`
    }
    else {
        return DateConvert(date)
    }
}