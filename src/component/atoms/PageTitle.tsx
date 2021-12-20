import {Typography} from "@material-ui/core";

export default function PageTitle(props: {children: string}) {
    return (
        <Typography variant={'h6'}　align={'center'} style={{fontWeight: 'bold'}}>{props.children}</Typography>
    );
}