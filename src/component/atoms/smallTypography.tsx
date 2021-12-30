import {Typography} from "@material-ui/core";

interface SmallTypographyProps {
    children: any,
    bold?: boolean,
    margin?: any,
    center?: boolean
}

export default function SmallTypography(props: SmallTypographyProps) {
    return (
        <Typography variant={'caption'}
                    align={props.center ? 'center' : 'left'}
                    style={
                        props.bold ? {color: "#5A4628", fontWeight: 'bold', margin: props.margin}
                            : {color: "#5A4628", margin: props.margin}
                    }>
            {props.children}
        </Typography>
    );
}