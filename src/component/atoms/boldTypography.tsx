import {Typography} from "@material-ui/core";

interface BoldTypographyProps {
    children: any,
    sub?: boolean,
    margin?: any,
    center?: boolean
}

export default function BoldTypography(props: BoldTypographyProps) {
    return (
        <Typography variant={props.sub ? 'subtitle2' : 'subtitle1'}
                    align={props.center ? 'center' : 'left'}
                    style={{color: "#5A4628", fontWeight: 'bold', margin: props.margin}}>
            {props.children}
        </Typography>
    );
}