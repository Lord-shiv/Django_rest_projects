import { Card, Paper, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fdfdff"
    },
    pageHeader: {
        padding: theme.spacing(1),
        // paddingLeft: theme.spacing(4),
        // display: 'flex',
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(0),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(1),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    },
}))

export default function PageHeader(props) {
    const classes = useStyles();
    const { title, subTitle, icon } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                {/* <Card className={classes.pageIcon}>
                    {icon}
                </Card> */}
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}
                    </Typography>
                    {/* <Typography
                        variant="subtitle2"
                        component="div"
                    >{subTitle}
                    </Typography> */}

                </div>
            </div>
        </Paper>

    )
}
