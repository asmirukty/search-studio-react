import SelectOption from "./selectOption";

interface MinMaxSelectProps {
    minLabel?: string,
    maxLabel?: string,
    min: any,
    max: any,
    minOptions: any[],
    maxOptions: any[],
    unit?: string,
    minNullIndex: number,
    maxNullIndex: number,
    changeMin: (event: any) => void,
    changeMax: (event: any) => void;
}

export default function MinMaxSelect(props: MinMaxSelectProps) {
    const {minLabel, maxLabel, min, max, minOptions, maxOptions, unit, minNullIndex, maxNullIndex} = props;

    return (
        <div style={{display: 'flex', alignItems: 'baseline'}}>
            <SelectOption label={minLabel} options={minOptions} nullIndex={minNullIndex} unit={unit}
                          value={min} min anotherValue={max} onChange={props.changeMin}/>
            <p>~</p>
            <SelectOption label={maxLabel} options={maxOptions} nullIndex={maxNullIndex} unit={unit}
                          value={max} max anotherValue={min} onChange={props.changeMax}/>
        </div>
    );
}