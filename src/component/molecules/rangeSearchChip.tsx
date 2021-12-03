import SearchChip from "../atoms/searchChip";

interface RangeSearchChipProps {
    minLabel: any|null,
    maxLabel: any|null,
    pre?: string,
    unit?: string,
    onDelete: (value: any) => void;
}
export default function RangeSearchChip(props: RangeSearchChipProps) {
    const {minLabel, maxLabel, pre, unit, onDelete} = props;

    return (
        <div>
            {
                (minLabel || maxLabel) &&
                <SearchChip onDelete={onDelete} pre={pre}
                      label={
                          unit ?
                              (minLabel && maxLabel) ? `${minLabel}~${maxLabel}${unit}` : (
                                  (minLabel) ? `${minLabel}${unit}~` : `~${maxLabel}${unit}`)
                              :
                              (minLabel && maxLabel) ? `${minLabel}~${maxLabel}` : (
                                  (minLabel) ? `${minLabel}~` : `~${maxLabel}`)
                      }
                />
            }
        </div>
    )
}