import {Typography} from "@material-ui/core";

export default function NormalSubTitle(props: {children: any}) {
    return (
        <Typography variant={'subtitle2'} style={{fontWeight: 'bold'}}>{props.children}</Typography>
    );
}