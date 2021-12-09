import React from "react";
import {Card, CardContent} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioResultDialog from "./studioResultDialog";
import StudioResultChip from "../molecules/studioResultChip";
import StudioResultSearchCardTitle from "../atoms/studioResultSearchCardTitle";
import StudioResultSearchCardButton from "../atoms/studioResultSearchCardButton";

const useStyles = makeStyles(() =>
    createStyles({
        topCard: {
            margin: '0 8px',
            zIndex: 1100,
            position:'sticky',
            top: 108
        },
        card: {
            color: "#5A4628",
            padding: '12px 16px 8px',
            '&:last-child': {
                paddingBottom: 8
            }
        },
        spaceBetween: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    })
);

export default function StudioResultSearchCard() {
    const classes = useStyles();

    return (
        <Card className={classes.topCard}>
            <CardContent className={classes.card}>
                <StudioResultSearchCardTitle/>
                <div className={classes.spaceBetween}>
                    <StudioResultChip/>
                    <StudioResultSearchCardButton/>
                    <StudioResultDialog/>
                </div>
            </CardContent>
        </Card>
    )
}