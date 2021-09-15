import React from 'react';
import SelectMenu from "../../selectMenu";

const options = [
    '下限なし', '1人',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人'
];

export default function MinPeopleSelect() {
    return (
        <SelectMenu label={'none'} initialState={'下限なし'} options={options}/>
    );
}
