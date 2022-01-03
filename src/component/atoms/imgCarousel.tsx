import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import Carousel from 'react-material-ui-carousel';
import {useMedia} from "use-media";

const useStyles = makeStyles(() =>
    createStyles({
        navBtn: {
            backgroundColor: '#5A4628',
            opacity: 0.8,
            padding: 2,
            margin: 8,
        },
        navIndicator: {
            color: '#5A4628',
            opacity: 0.5,
            '&:hover': {
                color: '#5A4628',
                opacity: 1
            },
            '&:active': {
                color: '#5A4628',
                opacity: 1
            }
        },
        navActiveIndicator: {
            color: '#5A4628',
            opacity: 1
        },
        img: {
            backgroundColor: '#F9F5F0',
            //height: 250,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        smallImg: {
            backgroundColor: '#F9F5F0',
            //height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }))


interface ImgCarouselProps {
    img: {
        name: string,
        description: string,
        path :string,
    }[]
}

export default function ImgCarousel(props: ImgCarouselProps) {
    const classes = useStyles();
    const isSmall = useMedia({ maxWidth: "560px" });

    return (
        <Carousel fullHeightHover={false} autoPlay={false}
                  navButtonsAlwaysVisible
                  navButtonsProps={{className: classes.navBtn}}
                  indicatorIconButtonProps={{className: classes.navIndicator}}
                  activeIndicatorIconButtonProps={{className: classes.navActiveIndicator}}>
            {
                props.img.map((img, index) => (
                    <div className={isSmall ? classes.smallImg : classes.img} key={index}>
                        <img style={{width: '100%'}} alt={'img' + index} src={"https://placehold.jp/300x200.png"}/>
                    </div>
                ))
            }
        </Carousel>
    )
}