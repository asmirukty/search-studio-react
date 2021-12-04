import TopTitleBar from "../organisms/topTitleBar";
import TopMenuTab from '../organisms/topMenuTab';
import StudioResult from "../organisms/studioResult";

export default function ResultPage() {

    return (
        <div>
            <TopTitleBar/>
            <TopMenuTab>
                {[
                    <StudioResult key={0}/>,
                    <div key={1}>レッスン・練習会を探す</div>,
                    <div key={2}>ナンバー・イベントを探す</div>,
                ]}
            </TopMenuTab>
        </div>
    );
}
