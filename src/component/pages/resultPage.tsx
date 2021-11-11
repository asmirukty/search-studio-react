import TopMenuTab from '../organisms/topMenuTab';
import StudioResult from "../organisms/studioResult";
import {useLocation} from "react-router-dom";
import TopTitleBar from "../organisms/topTitleBar";

export default function ResultPage() {
    const location = useLocation();

    return (
        <div>
            <TopTitleBar/>
            <TopMenuTab>
                {[
                    <StudioResult state={location.state}/>,
                    <div>レッスン・練習会を探す</div>,
                    <div>ナンバー・イベントを探す</div>,
                ]}
            </TopMenuTab>
        </div>
    );
}
