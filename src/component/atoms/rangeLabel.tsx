interface RangeLabelProps {
    min: any|null,
    max: any|null,
    unit?: string,
}
export default function RangeLabel(props: RangeLabelProps) {
    const {min, max, unit} = props;

    return (
            (!min && !max) ? null :
                  unit ?
                      (min && max) ? `${min}~${max}${unit}` : (
                          (min) ? `${min}${unit}~` : `~${max}${unit}`)
                      :
                      (min && max) ? `${min}~${max}` : (
                          (min) ? `${min}~` : `~${max}`)
    )
}