import React, { SetStateAction, Dispatch, useMemo } from 'react';
import { Card, CardContent, CardHeader, List, ListItem, Chip, makeStyles, Divider, useMediaQuery } from '@material-ui/core';
import {TextField, InputAdornment } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import Star from '@material-ui/icons/StarBorderOutlined';
import SearchIcon from '@material-ui/icons/Search';

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

export interface FilterState {
    setLabels: Dispatch<SetStateAction<string[]>>, 
    labels: string[],
    tags: {name: string, color: string}[], 
    searchString: string, 
    setSearchString: Dispatch<SetStateAction<string>>, 
    activeTags: Set<string>, 
    setActiveTags: Dispatch<SetStateAction<Set<string>>>
}

export default function FilterDisplay({filterState}: {filterState: FilterState}) {
    const classes = useStyles();
    const isTablet = useMediaQuery('(max-width:960px)');
    const filteredTags = useMemo(() => {
        if(filterState.searchString.length === 0){
            return filterState.tags;
        } else {
            return filterState.tags.filter(tag => tag.name.includes(filterState.searchString))
        }
    },[filterState.searchString, filterState.tags]);

    const handleFilterTags = ((e:any) => {
        filterState.setSearchString(e.target.value);
    });

    const displayHeader = isTablet ? null :
    <div>
        <CardHeader className={classes.header} title="🔖 Tags/Filter"/>
        <Divider/>
    </div>

    return (
        <Card elevation={0}>
            <CardContent className={classes["MuiCardContent-root"]}>
                { displayHeader }
                <List>
                    <ListItem className={classes.labelContainer} disableGutters>
                        <TextField
                            id="tag-search" 
                            className={classes.searchTags}
                            onChange={handleFilterTags}
                            placeholder="Search Tags" 
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
                            }}
                            fullWidth
                            size="small"
                        />
                        {filteredTags.sort((tagA: {name: string, color: string}, tagB: {name: string, color: string}) => {
                                return tagA.color < tagB.color ? -1 : 1;
                            })
                            .map((tag, index) => {
                            let icon;
                            let color: "default" | "primary" | "secondary" = "default";

                            if (tag.color === "f50057"){
                                icon = <CodeIcon />
                                color = "secondary"
                            } else if (tag.color === "555555"){
                                icon = <BuildIcon />
                            } else if (tag.color === "3f51b5") {
                                icon = <Star />
                                color = "primary"
                            }

                            const handleClick = () => {
                                const newActiveTags = new Set(filterState.activeTags)
                                let enabled = false;
                                if(newActiveTags.has(tag.name)){
                                    newActiveTags.delete(tag.name);
                                    enabled = false;
                                } else {
                                    newActiveTags.add(tag.name)
                                    enabled = true;
                                }
                                filterState.setActiveTags(newActiveTags);
                                
                                //check against card to see if tags are there.
                                const newLabels = [...filterState.labels];

                                if (enabled) {
                                    newLabels.push(tag.name.toLowerCase());
                                    filterState.setLabels(newLabels);
                                } else if (!enabled) {
                                    let filteredLabels = newLabels.filter(label => label !== tag.name);
                                    filterState.setLabels(filteredLabels);
                                }
                            }

                            let chipVariant: "default" | "outlined" = filterState.activeTags.has(tag.name) ? "default" : "outlined";

                            return (
                                <Chip
                                    key={index}
                                    label={tag.name}
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