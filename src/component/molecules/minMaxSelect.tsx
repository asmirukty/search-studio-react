import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import SelectOption from "./selectOption";

const useStyles = makeStyles(() =>
    createStyles({
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center'
        }
    }));

interface MinMaxSelectProps {
    minLabel?: string, maxLabel?: string,
    min: any, max: any,
    minOptions: any[], maxOptions: any[], unit?: string,
    minNullIndex: number, maxNullIndex: number, disableEqual?: boolean,
    changeMin: (event: any) => void, changeMax: (event: any) => void
}

export default function MinMaxSelect(props: MinMaxSelectProps) {
    const classes = useStyles()
    const {minLabel, maxLabel, min, max, minOptions, maxOptions, unit, minNullIndex, maxNullIndex, disableEqual} = props;

    return (
        <div className={classes.select}>
            <SelectOption label={minLabel} value={min} nullValue={minOptions[minNullIndex]} onChange={props.changeMin}>
                {
                    minOptions.map((option: any, index) =>
                        <MenuItem value={option} key={index}
                                  disabled={index !== minNullIndex && max && (disableEqual ? index >= maxOptions.indexOf(max) : index > maxOptions.indexOf(max))}>
                            {option}{unit && index !== minNullIndex && unit}
                        </MenuItem>
                    )
                }
            </SelectOption>
            <p>~</p>
            <SelectOption label={maxLabel} value={max} nullValue={maxOptions[maxNullIndex]} onChange={props.changeMax}>
                {
                    maxOptions.map((option: any, index) =>
                        <MenuItem value={option} key={index}
                                  disabled={index !== maxNullIndex && min && (disableEqual ? index <= minOptions.indexOf(min) : index < minOptions.indexOf(min))}>
                            {option}{unit && index !== maxNullIndex && unit}
                        </MenuItem>
                    )
                }
            </SelectOption>
        </div>
    )
}