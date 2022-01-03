import React from "react";
import VacantRoom from "../organisms/vacantRoom";
import {Paper} from "@material-ui/core";
import BoldTypography from "../atoms/boldTypography";
import {Room} from "../seachResultType";

export default function VacantRoomPaper(props: {rooms: Room[]}) {
    return (
        <Paper elevation={0} style={{flexGrow: 1, minWidth: '50%', margin: 12}}>
            <div style={{margin: '8px 0', overflow: 'scroll', height: window.innerHeight - 200}}>
                <BoldTypography center margin={4}>?</BoldTypography>
                {
                    props.rooms.map((room,index) =>
                        <VacantRoom room={room} key={index}/>
                    )
                }
            </div>
        </Paper>
    );
}