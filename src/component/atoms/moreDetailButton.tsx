import React from 'react';
import Button from "@material-ui/core/Button";

export default function MoreDetailButton(props: {onClick: () => void}) {
    return (
        <Button style={{color: "#5A4628", padding: '0 6px'}} onClick={props.onClick}>
            もっとしぼり込む {'>'}
        </Button>
    );
}