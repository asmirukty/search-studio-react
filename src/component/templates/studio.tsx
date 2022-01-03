import React, {useEffect, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import ImgCarousel from "../atoms/imgCarousel";
import VacantRoom from "../organisms/vacantRoom";
import StudioInfo from "../organisms/studioInfo";
import PageTitle from "../atoms/pageTitle";
import {useMedia} from "use-media";
import VacantRoomPaper from "../organisms/vacantRoomPaper";
import StudioMenuTab from "../organisms/studioMenuTab";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {initialStudio, StudioType} from "../seachResultType";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            position: 'sticky',
            top: 100,
            zIndex: 1000,
            padding: 16
        },
        blurImg: {
            position: 'sticky',
            top: 100,
            height: 100,
            zIndex: 100,
            filter:'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        tabs: {
            backgroundColor: '#FFF',
            color: '#5A4628',
            minHeight: 40,
            zIndex: 10
        },
        paper: {
            color: '#5A4628',
            backgroundColor: '#FFF',
        }
    }))

export default function Studio() {
    const search = useLocation().search;
    const [studio, setStudio] = useState<StudioType>(initialStudio);
    const isWide = useMedia({ minWidth: "800px" });
    const classes = useStyles();
    const [imgTop, setImgTop] = React.useState<number>(window.innerWidth < 321 ? -27 : 80 - window.innerWidth / 3)
    const [barTop, setBarTop] = React.useState<number>(window.innerWidth < 321 ? 182 : 75 + window.innerWidth / 3)

    useEffect(() => {
        axios.get('http://localhost:5000/studios/' + search)
            .then(response => {
                setStudio(response.data)
            });
    })

    window.onresize = function () {
        if (window.innerWidth >= 321) {
            setImgTop(80 - window.innerWidth / 3)
            setBarTop(75 + window.innerWidth / 3)
        }
    };

    function StudioInformation() {
        return <StudioInfo intro={studio.studio_introduction} facilities={studio.studio_facilities}
                           address={studio.address} precaution={studio.studio_precaution} url={studio.homepage_url}/>
    }

    {/**
        const carousel = <div className={classes.img}><ImgCarousel img={studio.studio_img}/></div>
        const blur = <>
            <Box style={{
                backgroundColor: '#F9F5F0',
                position: 'fixed',
                height: 120,
                width: '100%',
                top: 100,
                zIndex: 10
            }}/>
            <div className={classes.blurImg}><img alt={'img'} src={studio.studio_img[0].path}/></div>
        </>

        const [img, setImg] = React.useState<React.ReactNode>(carousel)

        window.addEventListener('scroll', function () {
            if (window.pageYOffset < 50 && img !== carousel) {
                setImg(carousel)
            } else if (window.pageYOffset > 150 && img === carousel) {
                setImg(blur)
            }
        })
    */}

    return (
        <>
            <div className={classes.title}>
                <PageTitle>{studio.studio_name}</PageTitle>
            </div>
            {
                isWide ?
                    <div style={{display: 'flex'}}>
                        <div style={{flexGrow: 1, maxHeight: '80vh', overflow: 'scroll', height: window.innerHeight - 180}}>
                            <ImgCarousel img={studio.studio_img}/>
                            <StudioInformation/>
                        </div>
                        <VacantRoomPaper rooms={studio.rooms}/>
                    </div>

                    :
                <>
                    <div style={{marginBottom: 20, position: 'sticky', top: imgTop, flexGrow: 1, zIndex: 100}}>
                        <ImgCarousel img={studio.studio_img}/>
                    </div>
                    {/**img*/}
                    <StudioMenuTab barTop={barTop}>
                        {
                            studio.rooms.map((room, index) => <VacantRoom room={room} key={index}/>)
                        }
                        <StudioInformation/>
                    </StudioMenuTab>
                </>
            }
        </>
    );
}