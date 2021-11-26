import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import SearchCheckbox from "../atoms/searchCheckbox";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
        checkArray: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    }));

interface DetailCheckboxProps {
    title: string,
    one?: boolean,
    options: any[],
    detailCheck: any[],
    check: (event: any) => void;
    unCheck: (event: any) => void;
}

export default function DetailCheckbox(props: DetailCheckboxProps) {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={props.one ? 'subtitle1' : 'subtitle2'}>
                {props.title}
            </Typography>
            <div className={classes.checkArray}>
                {
                    props.options.map((option) => (
                        <SearchCheckbox item={option} itemName={option} key={option}
                                           checked={props.detailCheck.includes(option)}
                                           itemChecked={props.check} itemUnChecked={props.unCheck}/>
                    ))
                }
            </div>

        </div>
    )
}