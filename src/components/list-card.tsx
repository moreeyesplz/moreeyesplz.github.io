import React from 'react';
import { useState } from 'react';
import { Typography, Grid, Card, CardContent, Chip, makeStyles, Avatar, Popover, CardActionArea } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
        header: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            "&:hover" :{
                color: "#3f51b5",
            }
          },
        labelContainer: {
            '& > *' : {
                margin: theme.spacing(.5, 1, .5, 0),
            }
        },
        popover: {
            pointerEvents: 'none',
        },
        paper: {
            padding: theme.spacing(1),
        },
        "popover-text":{
            fontSize: "12px",
        },
        "card-action": {
            display: "flex",
        },
        comments: {
            '&:hover': {
                color: "#f50057",
            }
        }
    })
);

export default function ListCard (){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event : any) => {
        setAnchorEl(event.currentTarget);
        console.log('hi')
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        console.log('bye')
    };

    const open = Boolean(anchorEl);
    
    return(
        <Card>
            <CardActionArea className={classes['card-action']}>
                <CardContent>
                    <Grid spacing={8} container>
                        <Grid item direction="column" alignItems="center" xs={1} spacing={1} container>
                            <Grid item>
                                <Avatar alt="username"/>
                            </Grid>
                            <Grid item>
                                <DoneIcon 
                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                    aria-haspopup="true"
                                    color="secondary"
                                    onMouseEnter={handlePopoverOpen}
                                    onMouseLeave={handlePopoverClose}/>
                                <Popover 
                                    id="mouse-over-popover"
                                    className={classes.popover}
                                    classes={{
                                      paper: classes.paper,
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus>
                                    <Typography className={classes['popover-text']}>Feedback already provided!</Typography>
                                </Popover>
                            </Grid>
                        </Grid>
                        <Grid item xs={11} sm container>
                            <Grid item direction="row" spacing={2} container>
                                <Grid item xs={12}>
                                    <Typography>Duchess-Toffee <span role="img" aria-label="eyes">👀</span> meeped 2 days ago</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.header} variant="h5">
                                        [MEEP] Could someone help to review this commit?
                                    </Typography>
                                </Grid>
                                <Grid className={classes.labelContainer} item xs={12}>
                                    <Chip size="small" variant="outlined" color="secondary" disabled label="JavaScript" />
                                    <Chip size="small" variant="outlined" color="secondary" disabled label="CSS"/>
                                    <Chip size="small" variant="outlined" disabled label="Sass"/>
                                    <Chip size="small" variant="outlined" disabled label="TypeScript"/>
                                    <Chip size="small" variant="outlined" color="primary" disabled label="Web Development"/>
                                    <Chip size="small" variant="outlined" color="primary" disabled label="UI Design"/>
                                    <Chip size="small" variant="outlined" color="primary" disabled label="Mobile Applications"/>
                                </Grid>
                                <Grid className={classes.comments} item xs={12} spacing={1} container>
                                    <Grid item>
                                        <CommentIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography>15 comments</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}