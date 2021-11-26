import React from 'react';
import SearchRadio from "../../atoms/searchRadio";

export default function DateMatchRadio() {
    const [value, setValue] = React.useState('いずれか');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <SearchRadio afterTyp={'の日時で空いている'} value={value}
                     options={['いずれか', 'すべて']} handleChange={handleChange}/>
    );
}
