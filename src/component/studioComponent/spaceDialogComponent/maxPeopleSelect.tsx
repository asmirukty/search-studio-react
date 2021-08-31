import React from 'react';
import SelectMenu from "../../selectMenu";

const options = [
    '上限なし',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人'
];

export default function MaxPeopleSelect() {
    return (
        <SelectMenu label={'none'} initialState={'上限なし'} options={options}/>
    );
}
