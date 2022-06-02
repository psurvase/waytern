import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Grid } from "@mui/material";
const useStyles = makeStyles(theme => ({
    FooterImage: {
        position: 'relative'
    },
    ImgTag: {
        position: 'absolute',
        right: '0%'
    },
    MainContainer: {
        backgroundColor: '#FFFFFF',
        paddingTop: 15,
        paddingBottom: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
}));
export default function FooterComponent() {
    const classes = useStyles();
    return (
        <Box className={classes.MainContainer} >
            <Grid container spacing={1}>
                <Grid item xs={5} className={classes.FooterImage} >
                    <img src="/images/logo/drone.png" alt="DDS" className={classes.ImgTag} />
                </Grid>
                <Grid item xs={7}>
                    <Typography >Copyright 2022 © DDS-Drone Delivery System</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
