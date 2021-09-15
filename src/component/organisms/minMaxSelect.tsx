import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";

interface MinMaxSelectProps {
    children?: React.ReactNode;
    min: any;
    max: any;
}

const useStyles = makeStyles(() =>
    createStyles( {
        select: {
            color: "#5A4628",
            display: 'flex',
            alignItems: 'flex-end',
            marginBottom: '12px'
        },
    }));

export default function MinMaxSelect(props: MinMaxSelectProps) {
    const classes = useStyles()

    return (
                <div className={classes.select}>
                    {props.min}
                    <p>~</p>
                    {props.max}
                </div>
    );
}