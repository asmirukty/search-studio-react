import DateConvert from "./dateConvert";

interface DateTimeConvertProps {
    date: Date,
    startTime: string|null,
    endTime: string|null
}

export default function DateTimeConvert(props: DateTimeConvertProps) {
    const {date, startTime, endTime} = props;

    if ( startTime && endTime) {
        return `${DateConvert(date)}${startTime}~${endTime}`
    }
    else if (startTime) {
        return `${DateConvert(date)}${startTime}~`
    }
    else if (endTime) {
        return `${DateConvert(date)}~${endTime}`
    }
    else {
        return DateConvert(date)
    }
}