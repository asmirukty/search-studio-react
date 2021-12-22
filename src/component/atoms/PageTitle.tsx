import {Typography} from "@material-ui/core";

interface PageTitleProps {
    children: any,
    margin?: any
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <Typography variant={'h6'}　align={'center'} style={{fontWeight: 'bold', margin: props.margin}}>
            {props.children}
        </Typography>
    );
}