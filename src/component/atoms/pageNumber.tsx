import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {useRecoilValue} from "recoil";
import {studioSearchResultState} from "../atom";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '4px 0 12px'
        }
    })
)

export default function PageNumber() {
    const classes = useStyles();
    const searchResult = useRecoilValue(studioSearchResultState);

    return (
        <Typography variant={'subtitle2'} className={classes.title}>
            全{searchResult.total_pages}件
        </Typography>
    );
}