import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, CardActions, Button } from '@material-ui/core';

export default function ListCard (){    
    return(
        <Card>
            <CardContent>
                <CardHeader 
                    title="MEEP! Join the more eyes, plz community by signing up through GitHub!"
                    subheader="Connect your GitHub repos by downloading more eyes, plz from the GitHub store."/>
            </CardContent>
            <CardMedia
                image="../assets/github.jpg"
            />
            <CardActions>
                <Button>Go to GitHub</Button>
                <Button>Find us in the Store</Button>
            </CardActions>
        </Card>
    )
}