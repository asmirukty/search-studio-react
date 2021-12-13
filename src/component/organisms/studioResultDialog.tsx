import React, {useEffect} from "react";
import {Dialog, DialogContent} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogCloseButton from "../atoms/dialogCloseButton";
import StudioSearchCard from "./studioSearchCard";
import StudioResultDialogTitle from "../atoms/studioResultDialogTitle";
import {useRecoilState, useSetRecoilState} from "recoil";
import {
    areaChipState, cityChipState, dateChipState, dateMatchState, detailItemChipState,
    fromStationChipState, lineChipState, mirrorChipState, peopleChipState,
    prefectureChipState, priceChipState, stationChipState, studioNameState, studioSearchCardOpenState
} from "../atom";
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import {FromQuery} from "../atoms/fromQuery";

const useStyles = makeStyles(() =>
    createStyles({
        paper: {
            margin: 12,
            flexGrow: 1
        },
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'block'
        },
        flexEnd: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        content: {
            padding: 0
        }
    }))

export default function StudioResultDialog() {
    const classes = useStyles();
    const [open, setOpen] = useRecoilState(studioSearchCardOpenState);
    const setPrefectureChip = useSetRecoilState(prefectureChipState);
    const setCityChip = useSetRecoilState(cityChipState);
    const setLineChip = useSetRecoilState(lineChipState);
    const setStationChip = useSetRecoilState(stationChipState);
    const setStudioName = useSetRecoilState(studioNameState);
    const setAreaChip = useSetRecoilState(areaChipState);
    const setPeopleChip = useSetRecoilState(peopleChipState);
    const setDateChip = useSetRecoilState(dateChipState);
    const setDateMatch = useSetRecoilState(dateMatchState);
    const setFromStationChip = useSetRecoilState(fromStationChipState);
    const setPriceChip = useSetRecoilState(priceChipState);
    const setMirrorChip = useSetRecoilState(mirrorChipState);
    const setDetailItemChip = useSetRecoilState(detailItemChipState);

    const query = FromQuery();

    useEffect(() => {
        if (open) {
            setPrefectureChip(query.prefecture);
            setCityChip(query.city);
            setLineChip(query.line);
            setStationChip(query.station);
            setStudioName(query.studioName ? query.studioName : '');
            setAreaChip({min: query.areaMin, max: query.areaMax});
            setPeopleChip({min: query.peopleMin, max: query.peopleMax});
            setDateChip(query.date);
            setDateMatch(query.dateMatch);
            setFromStationChip(query.fromStation);
            setPriceChip({min: query.priceMin, max: query.priceMax});
            setMirrorChip({min:  query.mirrorMin, max: query.mirrorMax});
            setDetailItemChip([...query.reservation, ...query.studioFacility, ...query.floorMaterial, ...query.roomFacility]);
            query.freeCancel && setDetailItemChip(prevState => [...prevState, 'キャンセル無料期間あり']);
            query.halfHourSlot && setDetailItemChip(prevState => [...prevState, reserveOptions[0]]);
            query.fromHalfHour && setDetailItemChip(prevState => [...prevState, reserveOptions[1]]);
        }
    }, [open])

    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <Dialog PaperProps={{className: classes.paper}} open={open}>
            <DialogActions className={classes.dialogBtn}>
                <div className={classes.flexEnd}>
                    <DialogCloseButton onClick={handleClickClose}/>
                </div>
                <StudioResultDialogTitle/>
            </DialogActions>
            <DialogContent className={classes.content}>
                <StudioSearchCard close={handleClickClose}/>
            </DialogContent>
        </Dialog>
    )
}