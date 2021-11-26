import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() =>
    createStyles({
        navBtn: {
            backgroundColor: '#5A4628',
            opacity: 0.8,
            padding: 2,
            margin: 0,
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
            margin: 'auto',
            paddingTop: 50,
            height: 100,
            textAlign: 'center'
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

    return (
        <Carousel fullHeightHover={false} autoPlay={false}
                  navButtonsAlwaysVisible
                  navButtonsProps={{className: classes.navBtn}}
                  indicatorIconButtonProps={{className: classes.navIndicator}}
                  activeIndicatorIconButtonProps={{className: classes.navActiveIndicator}}>
            {
                props.img.map((img, index) => (
                    <div className={classes.img} key={index}>
                        <img alt={'img' + index} src={img.path}/>
                    </div>
                ))
            }
        </Carousel>
    )
}