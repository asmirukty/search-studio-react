import Header from "../organisms/header";
import TopMenuTab from '../organisms/topMenuTab';
import StudioResult from "../templates/studioResult";

export default function StudioResultPage() {

    return (
        <div>
            <Header/>
            <TopMenuTab>
                <StudioResult key={0}/>
                <div key={1}>レッスン・練習会を探す</div>
                <div key={2}>ナンバー・イベントを探す</div>
            </TopMenuTab>
        </div>
    );
}
