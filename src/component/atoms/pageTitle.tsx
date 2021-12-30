import {Typography} from "@material-ui/core";

interface PageTitleProps {
    children: any,
    margin?: any,
    center?: boolean
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <Typography variant={'h6'}　
                    align={props.center ? 'center' : 'left'}
                    style={{fontWeight: 'bold', margin: props.margin}}>
            {props.children}
        </Typography>
    );
}