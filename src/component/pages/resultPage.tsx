import MenuTabs from '../organisms/menuTabs';
import TitleBar from '../organisms/titleBar';
import StudioResult from "../organisms/studioResult";
import {useLocation} from "react-router-dom";

export default function ResultPage() {
    const location = useLocation();

    return (
        <div>
            <TitleBar/>
            <MenuTabs children={<StudioResult state={location.state}/>}/>
        </div>
    );
}
