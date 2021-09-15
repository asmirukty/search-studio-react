import React from 'react';
import SelectMenu from "../../../selectMenu";

const options = [
    '上限なし',　'5m', '10m',　'15m', '20m',　'25m', '30m',　'35m', '40m', '45m', '50m',
];

export default function MaxMirrorSelect() {
    return (
        <SelectMenu label={'none'} initialState={'上限なし'} options={options}/>
    );
}
