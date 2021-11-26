import TopTitleBar from "../organisms/topTitleBar";
import TopMenuTab from '../organisms/topMenuTab';
import StudioSearch from "../organisms/studioSearch";

export default function SearchPage() {
    return (
        <div>
            <TopTitleBar/>
            <TopMenuTab>
                {[
                    <StudioSearch key={0}/>,
                    <div key={1}>レッスン・練習会を探す</div>,
                    <div key={2}>ナンバー・イベントを探す</div>
                ]}
            </TopMenuTab>
        </div>
    );
}