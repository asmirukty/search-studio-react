import {Typography} from "@material-ui/core";

export default function NormalTitle(props: {children: any}) {
    return (
        <Typography variant={'subtitle1'} style={{fontWeight: 'bold'}}>{props.children}</Typography>
    );
}