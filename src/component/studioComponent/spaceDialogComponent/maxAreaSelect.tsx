import React from 'react';
import SelectMenu from "../../selectMenu";

const options = [
    '上限なし', <div>10m<sup>2</sup></div>,　<div>15m<sup>2</sup></div>, <div>20m<sup>2</sup></div>,
    <div>25m<sup>2</sup></div>, <div>30m<sup>2</sup></div>, <div>40m<sup>2</sup></div>, <div>50m<sup>2</sup></div>,
    <div>60m<sup>2</sup></div>, <div>80m<sup>2</sup></div>,  <div>100m<sup>2</sup></div>,
    <div>120m<sup>2</sup></div>, <div>150m<sup>2</sup></div>,
];

export default function MaxAreaSelect() {
    return (
        <SelectMenu label={'none'} initialState={'上限なし'} options={options}/>
    );
}
