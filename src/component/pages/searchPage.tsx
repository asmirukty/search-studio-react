import MenuTabs from '../organisms/menuTabs';
import TitleBar from '../organisms/titleBar';

export default function SearchPage() {
    return (
        <div>
            <TitleBar/>
            <MenuTabs page={'search'}/>
        </div>
    );
}