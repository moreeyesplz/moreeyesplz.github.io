import React, { useState } from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, makeStyles, Typography, IconButton, useMediaQuery, Link } from '@material-ui/core';
import Meep from './Logo/more-eyes-plz';
import GitHubImage from '../assets/github-actions.jpg';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    image: {
        height: '260px',
    },
    text: {
        marginTop: '10px'
    },
    closeButton: {
        float: "right"
    },
    buttonContainer: {
        justifyContent: "flex-end",
        [theme.breakpoints.down('sm')]:{
            justifyContent: "center"
        },
    },
    headerText :{
        [theme.breakpoints.down('sm')]:{
            fontSize: "25px",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: "20px",
        },
    }
}))

export default function WelcomeCard (){
    const classes = useStyles();
    const [displayCard, setDisplayCard] = useState("block");
    const isTablet = useMediaQuery('(max-width:960px)');

    const closeCard = () => {
        setDisplayCard("none");
    }

    const displayHeader= isTablet ? 
        null
        :
        <div style={{display: "flex", alignItems: "center"}}>
            <Typography className={classes.text} variant="h5">Welcome to the </Typography>
            <Meep/>
            <Typography className={classes.text} variant="h5">community!</Typography>
        </div>
    return(
        <Card style={{display:`${displayCard}`}}>
            <CardContent>
                <IconButton 
                    className={classes.closeButton}
                    aria-label="delete"
                    onClick={closeCard}>
                    <CloseIcon />
                </IconButton>
                
                {displayHeader}
                
                <Typography className={classes.headerText}>Start getting more eyes on your code by adding <Link style={{color: "#f50057"}} href="https://github.com/marketplace/actions/meep-scanner">MEEP Scanner</Link> from the GitHub store.</Typography>                
            </CardContent>
            <CardMedia
                className={classes.image}
                image={GitHubImage}
                onClick={() => window.location.href="https://github.com/marketplace/actions/meep-scanner"}
            />
            <CardActions className={classes.buttonContainer}>
                <Button variant="contained" color="primary" size="large" href="https://github.com/marketplace/actions/meep-scanner">Our GitHub Actions Page</Button>
            </CardActions>
        </Card>
    )
}