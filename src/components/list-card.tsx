import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Chip, makeStyles, Avatar, CardActionArea, Collapse, IconButton } from '@material-ui/core';
// import { Popover } from '@material-ui/core';
// import CommentIcon from '@material-ui/icons/Comment';
// import DoneIcon from '@material-ui/icons/Done';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    header: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        "&:hover": {
            color: "#3f51b5",
        }
    },
    labelContainer: {
        '& > *': {
            margin: theme.spacing(.5, 1, .5, 0),
        }
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
    "popover-text": {
        fontSize: "12px",
    },
    "card-action": {
        display: "flex",
    },
    comments: {
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        '&:hover': {
            color: "#f50057",
        }
    },
    user: {
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "&:hover": {
            color: "#f50057",
        }
    },
    avatar: {
        border: "1px solid #bdbdbd",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "&:hover": {
            border: " 1px solid #f50057"
        }
    },
    expand: {
        marginTop: "-50px",
        float: "right",
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        float: "right",
        transform: 'rotate(180deg)',
    },
    details: {
        margin: theme.spacing(0,2)
    }
})
);

const TagMapping: { [key: string]: number } = {
    "javascript": 0,
    "html": 0,
    "css": 0,
    "c++": 1,
    "c#": 1,
    "java": 1,
    "react": 1,
    "typeScript": 1,
    "github": 1,
    "sass": 1,
    "unity": 1,
    "node.js": 1,
    "web dev": 2,
    "game dev": 2,
    "mobile apps": 2,
    "ui design": 2,
    "graphics": 2,
    "benchmark": 2,
    "api": 2
}

interface MeepRequestProps {
    title: string,
    url: string,
    tags: string[],
    user: { avatar: string, name: string, url: string },
    createdAt: string
};

export default function ListCard(props: MeepRequestProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false)
    // const [anchorEl, setAnchorEl] = useState(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // const handlePopoverOpen = (event : any) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handlePopoverClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);

    const formatDate = (date: string) => {
        const dateTimeSplit = date.split('T');
        const dateSplit = dateTimeSplit[0].split('-');
        const year = dateSplit[0];
        const month = dateSplit[1];
        let monthAbbr = ""
        const day = dateSplit[2];

        switch (month) {
            case "01":
                monthAbbr = "Jan";
                break;
            case "02":
                monthAbbr = "Feb";
                break;
            case "03":
                monthAbbr = "Mar";
                break;
            case "04":
                monthAbbr = "Apr";
                break;
            case "05":
                monthAbbr = "May";
                break;
            case "06":
                monthAbbr = "Jun";
                break;
            case "07":
                monthAbbr = "Jul";
                break;
            case "08":
                monthAbbr = "Aug";
                break;
            case "09":
                monthAbbr = "Sep";
                break;
            case "10":
                monthAbbr = "Oct";
                break;
            case "11":
                monthAbbr = "Nov";
                break;
            case "12":
                monthAbbr = "Dec";
                break;
        }
        return (`${monthAbbr} ${day}, ${year}`);
    }

    const extractTitle = (message: string) => {
        const title = message.split(/(\n)/)
        return title[0];
    }

    const extractDetails = (message: string) => {
        const title = message.split(/(\n)/)
        const details = title.slice(1).join("")
        return details;
    }


    return (
        <Card> 
            <CardActionArea className={classes['card-action']} onClick={() => window.location.href = props.url}>
                <CardContent style={{width: "100%"}}>
                    <Grid spacing={8} container wrap="nowrap" >
                        <Grid item xs={1} spacing={1} container>
                            <Grid item>
                                <Avatar className={classes.avatar} src={props.user.avatar} alt={props.user.name} onClick={() => window.location.href = props.user.url} />
                            </Grid>
                            <Grid item>
                                {/* <DoneIcon 
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
                                    </Popover> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={11} direction="column" wrap="nowrap" sm container>
                            <Grid item spacing={2} container>
                                <Grid item xs={12}>
                                    <Typography>
                                        <span className={classes.user} onClick={() => window.location.href = props.user.url}>{props.user.name}</span>
                                        <span role="img" aria-label="eyes" style={{ padding: "6px" }}>👀</span>
                                    meeped on {formatDate(props.createdAt)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.header} variant="h5">
                                        {extractTitle(props.title)}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.labelContainer} item xs={12}>
                                    {props.tags.map((tag: string, index: number) => {
                                        const tagLowerCase = tag.toLowerCase();
                                        let color: "default" | "primary" | "secondary" = "default";
                                        let dataMap = TagMapping[tagLowerCase];

                                        if (dataMap === 0) {
                                            color = "secondary";
                                        } else if (dataMap === 2) {
                                            color = "primary";
                                        }

                                        return (
                                            <Chip
                                                key={index}
                                                label={tag}
                                                color={color}
                                                variant="outlined"
                                                size="small"
                                                disabled
                                            />
                                        )
                                    })}
                                </Grid>
                                {/* <Grid className={classes.comments} item xs={12} spacing={1} container>
                                        <Grid item>
                                            <CommentIcon />
                                        </Grid>
                                        <Grid item>
                                            <Typography>15 comments</Typography>
                                        </Grid>
                                    </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                color="primary">
                <ExpandMoreIcon />
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.details}>
                    <Typography>{extractDetails(props.title)}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}