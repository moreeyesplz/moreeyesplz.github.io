import React, { useState } from 'react';
import { Card, CardContent, CardHeader, List, ListItem, Chip, makeStyles, Divider } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import Star from '@material-ui/icons/StarBorderOutlined';

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
    }
}));

interface Filter {
    label: string,
    type: "lang" | "tool" | "category",
    enabled?: boolean
}

export default function UserStats() {
    const classes = useStyles();

    const [chipData, setChipData] = useState<Filter[]>([
        {label: "JavaScript", type: "lang"},
        {label: "HTML", type: "lang"},
        {label: "CSS", type: "lang"},
        {label: "C++", type: "lang"},
        {label: "C#", type: "lang"},
        {label: "Java", type: "lang"},
        {label: "React", type: "tool"},
        {label: "TypeScript", type: "tool"},
        {label: "Sass", type: "tool"},
        {label: "Unity", type: "tool"},
        {label: "Node.JS", type: "tool"},
        {label: "Web Dev", type: "tool"},
        {label: "Game Dev", type: "category"},
        {label: "Mobile Apps", type: "category"},
        {label: "UI Design", type: "category"},
        {label: "Graphics", type: "category"},
        {label: "Benchmark", type: "category"},
        {label: "API", type: "category"}
    ]);

    return (
        <Card>
            <CardContent className={classes["MuiCardContent-root"]}>
                <CardHeader className={classes.header} title="🔖 Tags/Filter"/>
                <Divider/>
                <List>
                    <ListItem className={classes.labelContainer} disableGutters>
                        {chipData.map((data, index) => {
                            let icon;
                            let color: "default" | "primary" | "secondary" = "default";

                            if (data.type === "lang"){
                                icon = <CodeIcon />
                                color = "secondary"
                            } else if (data.type === "tool"){
                                icon = <BuildIcon />
                            } else if (data.type === "category") {
                                icon = <Star />
                                color = "primary"
                            }

                            const handleClick = () => {
                                let enabled = !data.enabled
                                const newChipData = [...chipData];
                                newChipData[index].enabled = enabled;
                                setChipData(newChipData);
                            }

                            let chipVariant: "default" | "outlined" = data.enabled ? "outlined" : "default";

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