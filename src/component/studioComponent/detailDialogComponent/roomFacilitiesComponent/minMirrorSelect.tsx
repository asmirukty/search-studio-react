import React from 'react';
import SelectMenu from "../../../selectMenu";

const options = [
    '下限なし',　'5m', '10m',　'15m', '20m',　'25m', '30m',　'35m', '40m', '45m', '50m',
];

export default function MinMirrorSelect() {
    return (
        <SelectMenu label={'横幅'} initialState={'下限なし'} options={options}/>
    );
}
