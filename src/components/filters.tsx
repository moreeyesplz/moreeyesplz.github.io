import React, { useState, SetStateAction, Dispatch } from 'react';
import { Card, CardContent, CardHeader, List, ListItem, Chip, makeStyles, Divider } from '@material-ui/core';
// import {TextField, InputAdornment } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import Star from '@material-ui/icons/StarBorderOutlined';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingLeft: 0,
    },
    "MuiCardContent-root": {
        '&:last-child' :{
            paddingBottom: 0,
        }  
    },
    labelContainer: {
        flexFlow: "row wrap",
        '& > *' : {
            margin: theme.spacing(.5, 1, .5, 0),
        }
    },
    searchTags: {
        margin: theme.spacing(0, 0, "8px", 0)
    }
}));

interface Filter {
    label: string,
    type: number,
    enabled?: boolean
}

export default function FilterDisplay(props: {setLabels: Dispatch<SetStateAction<string[]>>, labels: string[]}) {
    const classes = useStyles();

    const [chipData, setChipData] = useState<Filter[]>([
        {label: "javascript", type: 0},
        {label: "html", type: 0},
        {label: "css", type: 0},
        {label: "c++", type: 0},
        {label: "c#", type: 0},
        {label: "java", type: 0},
        {label: "react", type: 1},
        {label: "typescript", type: 1},
        {label: "sass", type: 1},
        {label: "unity", type: 1},
        {label: "node.js", type: 1},
        {label: "web dev", type: 2},
        {label: "github", type: 2},
        {label: "game dev", type: 2},
        {label: "mobile apps", type: 2},
        {label: "ui design", type: 2},
        {label: "graphics", type: 2},
        {label: "benchmark", type: 2},
        {label: "api", type: 2}
    ]);

    return (
        <Card elevation={0}>
            <CardContent className={classes["MuiCardContent-root"]}>
                <CardHeader className={classes.header} title="🔖 Tags/Filter"/>
                <Divider/>
                <List>
                    <ListItem className={classes.labelContainer} disableGutters>
                        {/* <TextField
                            id="tag-search" 
                            className={classes.searchTags}
                            placeholder="Search Tags" 
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
                            }}
                            size="small"
                        /> */}
                        {chipData.map((data, index) => {
                            let icon;
                            let color: "default" | "primary" | "secondary" = "default";

                            if (data.type === 0){
                                icon = <CodeIcon />
                                color = "secondary"
                            } else if (data.type === 1){
                                icon = <BuildIcon />
                            } else if (data.type === 2) {
                                icon = <Star />
                                color = "primary"
                            }

                            const handleClick = () => {
                                let enabled = !data.enabled
                                const newChipData = [...chipData];
                                newChipData[index].enabled = enabled;
                                setChipData(newChipData);
                                
                                const newLabels = [...props.labels];

                                if (enabled) {
                                    newLabels.push(data.label.toLowerCase());
                                    props.setLabels(newLabels);
                                } else if (!enabled) {
                                    let filteredLabels = newLabels.filter(label => label !== data.label);
                                    props.setLabels(filteredLabels);
                                }
                            }

                            let chipVariant: "default" | "outlined" = data.enabled ? "default" : "outlined";

                            return (
                                <Chip
                                    key={index}
                                    label={data.label}
                                    icon={icon}
                                    variant={chipVariant}
                                    color={color}
                                    onClick={handleClick}
                                />
                            )
                        })}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}