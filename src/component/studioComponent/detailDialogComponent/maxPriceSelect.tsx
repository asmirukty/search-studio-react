import React from 'react';
import SelectMenu from "../../selectMenu";

const options = [
    '上限なし',　'500円', '1000円',　'1500円', '2000円',　'2500円', '3000円',　'3500円', '4000円',
    '4500円', '5000円',　'6000円', '7000円',　'8000円', '9000円', '10000円'
];

export default function MaxPriceSelect() {
    return (
        <SelectMenu label={'none'} initialState={'上限なし'} options={options}/>
    );
}
