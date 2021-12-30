import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuTab from "../molecules/menuTab";
import ImgCarousel from "../atoms/imgCarousel";
import StudioRoomContent from "../organisms/studioRoomContent";
import StudioInfo from "../organisms/studioInfo";
import {studio} from "../studioData";
import PageTitle from "../atoms/pageTitle";
import {useMedia} from "use-media";
import {Box, Paper} from "@material-ui/core";
import BoldTypography from "../atoms/boldTypography";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            position: 'sticky',
            top: 100,
            zIndex: 1000,
            padding: 16
        },
        smallImg: {
            marginBottom: 20,
            position: 'sticky',
            top: 100,
            zIndex: 100
        },
        img: {
            marginBottom: 20,
            position: 'sticky',
            top: 60,
            zIndex: 100,
            flexGrow: 1
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
        smallTabBar: {
            position: "sticky",
            top: 240,
        },
        tabBar: {
            position: "sticky",
            top: 300,
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
    const isSmall = useMedia({ maxWidth: "560px" });
    const isWide = useMedia({ minWidth: "800px" });
    const classes = useStyles();

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
                            <StudioInfo intro={studio.studio_introduction} facilities={studio.studio_facilities}
                                        address={studio.address} precaution={studio.studio_precaution} url={studio.homepage_url}/>
                        </div>
                        <Paper elevation={0} style={{flexGrow: 1, minWidth: '50%', margin: 12}}>
                            <div style={{margin: '8px 0', overflow: 'scroll', height: window.innerHeight - 200}}>
                                <BoldTypography center margin={4}>?</BoldTypography>
                            {
                                studio.rooms.map((room,index) =>
                                    <StudioRoomContent room={room} key={index}/>
                                )
                            }
                            </div>
                        </Paper>
                    </div>

                    :
                <>
                    <div className={isSmall ? classes.smallImg : classes.img}>
                        <ImgCarousel img={studio.studio_img}/>
                    </div>
                    {/**img*/}
                    <MenuTab labels={["部屋", "スタジオ情報"]}
                             barStyle={isSmall ? classes.smallTabBar : classes.tabBar}
                             tabsStyle={classes.tabs} contentStyle={classes.paper}
                             tabFlexGrow={.5} tabMinHeight={44} tabFontSize={14}>
                        {
                            studio.rooms.map((room,index) =>
                            <StudioRoomContent room={room} key={index}/>
                            )
                        }
                        <StudioInfo intro={studio.studio_introduction} facilities={studio.studio_facilities}
                                    address={studio.address} precaution={studio.studio_precaution} url={studio.homepage_url}/>
                    </MenuTab>
                </>
            }
        </>
    );
}