import StudioSearchTitle from "../atoms/studioSearchTitle";
import StudioSearchCard from "../organisms/studioSearchCard";
import {useMedia} from "use-media";
import StudioSearchWideCard from "../organisms/studioSearchWideCard";

export default function StudioSearch() {
    const isWide = useMedia({ minWidth: "605px" });
    return (
        <div style={{padding: 24}}>
            <StudioSearchTitle/>
            {
                isWide ? <StudioSearchWideCard/> : <StudioSearchCard/>
            }
        </div>
    );
}