import React, {useEffect, useState} from 'react';
import {Checkbox} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";

const FormControlLabel = withStyles({
    root: {
        margin: 0
    },
    label: {
        color: '#5A4628',
        fontSize: 14
    }
})(MuiFormControlLabel);

function count (str:string) {
    let count:number = 0
    for (let i = 0, len = str.length; i < len; i++){
        let c = str.charCodeAt(i)
        if (c >= 0x0 && c <= 0x7f) { // 全角半角判定
            count += 0.5
        } else {
            count += 1
        }
    }
    return count
}

interface SearchCheckboxProps{
    item: any;
    itemName: string;
    key: string;
    pref?: boolean;
    open?: boolean;
    checked: boolean;
    itemChecked: (value: any) => void;
    itemUnChecked: (value: any) => void;
}

export default function SearchCheckbox(props: SearchCheckboxProps) {
    const {item, itemName, key, pref, checked: checkedProp, itemChecked, itemUnChecked} = props;
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(checkedProp)
    }, [checkedProp]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked( event.target.checked );
        event.target.checked ? itemChecked(item) : itemUnChecked(item)
    };

    return (
        <div>
            {(pref) ?
                (<FormControlLabel
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={
                        <Checkbox style={{padding: 4}} size='small' checked={checked}
                                  onChange={handleChange} value={item} key={key} color="primary"/>
                    }
                    label={itemName}
                />)
                :
                (<FormControlLabel
                    style={count(itemName) < 8 ? {width: 140} : {width: 280}}
                    control={
                        <Checkbox style={{padding: 4}} size='small' checked={checked}
                                  onChange={handleChange} value={item} key={key} color="primary"/>
                    }
                    label={itemName}
                />)
            }
        </div>
    );
}
