import React, { useState } from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, makeStyles, Typography, IconButton } from '@material-ui/core';
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
        justifyContent: "flex-end"
    }
}))

export default function WelcomeCard (){
    const classes = useStyles();
    const [displayCard, setDisplayCard] = useState("block")

    const closeCard = () => {
        setDisplayCard("none");
    }

    return(
        <Card style={{display:`${displayCard}`}}>
            <CardContent>
                <IconButton 
                    className={classes.closeButton}
                    aria-label="delete"
                    onClick={closeCard}>
                    <CloseIcon />
                </IconButton>
                
                <div style={{display: "flex", alignItems: "center"}}>
                    <Typography className={classes.text} variant="h5">Welcome to the </Typography>
                    <Meep/>
                    <Typography className={classes.text} variant="h5">community!</Typography>
                </div>
                
                <Typography>Start getting more eyes on your code by adding MEEP Scanner from the GitHub store.</Typography>                
            </CardContent>
            <CardMedia
                    className={classes.image}
                    image={GitHubImage}
                    onClick={() => window.location.href="https://github.com/marketplace/actions/meep-scanner"}
                />
            <CardActions className={classes.buttonContainer}>
                <Button variant="contained" color="primary" size="large" onClick={() => window.location.href="https://github.com/marketplace/actions/meep-scanner"}>Our GitHub Store Page</Button>
            </CardActions>
        </Card>
    )
}