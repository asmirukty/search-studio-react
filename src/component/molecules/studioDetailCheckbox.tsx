import SearchCheckbox from "../atoms/searchCheckbox";
import {useRecoilState} from "recoil";
import {detailItemState} from "../atom";

export default function StudioDetailCheckbox(props: {options: any[]}) {
    const [detailItem, setDetailItem] = useRecoilState<string[]|any[]>(detailItemState);

    const checkDetailItem = (item: string) => {
        setDetailItem(prevState => [...prevState, item]);
    };

    const unCheckDetailItem = (item: string) => {
        setDetailItem(prevState => prevState.filter((element) => element !== item));
    };

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                props.options.map((option) => (
                    <SearchCheckbox item={option} itemName={option === '鏡2面' ? '2面' : option} key={option}
                                       checked={detailItem.includes(option)}
                                       itemChecked={checkDetailItem} itemUnChecked={unCheckDetailItem}/>
                ))
            }
        </div>
    )
}