import Header from "../organisms/header";
import TopMenuTab from '../organisms/topMenuTab';
import StudioSearch from "../templates/studioSearch";

export default function StudioSearchPage() {
    return (
        <div>
            <Header/>
            <TopMenuTab>
                <StudioSearch key={0}/>
                <div key={1}>レッスン・練習会を探す</div>
                <div key={2}>ナンバー・イベントを探す</div>
            </TopMenuTab>
        </div>
    );
}