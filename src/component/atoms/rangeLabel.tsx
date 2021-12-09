interface RangeLabelProps {
    min: any|null,
    max: any|null,
    unit?: string,
}
export default function RangeLabel(props: RangeLabelProps) {
    const {min, max, unit} = props;

    if (!min && !max) {
        return null
    } else if (min && max) {
        return `${min}~${max}${unit ? unit : ''}`
    } else if (min) {
        return `${min}${unit ? unit : ''}~`
    } else {
        return `~${max}${unit ? unit : ''}`
    }
}