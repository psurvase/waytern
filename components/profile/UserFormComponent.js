import {Box, Grid, Typography} from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    DataSectionForm: {
        paddingLeft: theme.spacing(4.5),
        marginTop: theme.spacing(1.5)
    },
    InfoText: {
        marginTop: theme.spacing(1.5)
    }
}));
export const UserFormComponent = ({ profileUser }) => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container mt={3} >
                <Grid item xs={5.5} className={classes.DataSectionForm} >
                    <Typography variant="body1"  >User name</Typography>
                    <Typography variant="body1" className={classes.InfoText} >{profileUser?.name}</Typography>
                </Grid>
                <Grid item xs={5.5} className={classes.DataSectionForm} >
                    <Typography variant="body1" >Email</Typography>
                    <Typography variant="body1" className={classes.InfoText} >{profileUser?.email}</Typography>
                </Grid>
            </Grid>
            <Grid container mt={3} >
                <Grid item xs={5.5} className={classes.DataSectionForm} >
                    <Typography variant="body1">Phone</Typography>
                    <Typography variant="body1" className={classes.InfoText}> +91-{profileUser?.phone} </Typography>
                </Grid>
                <Grid item xs={5.5} className={classes.DataSectionForm}>
                    <Typography variant="body1" >Address</Typography>
                    <Typography variant="body1" className={classes.InfoText}> {profileUser?.address} </Typography>
                </Grid>
            </Grid>
            <Grid container mt={3} >
                <Grid item xs={5.5} className={classes.DataSectionForm} >
                    <Typography variant="body1" >City</Typography>
                    <Typography variant="body1" className={classes.InfoText}> {profileUser?.city}  </Typography>
                </Grid>
                <Grid item xs={5.5} className={classes.DataSectionForm} >
                    <Typography variant="body1" >Country</Typography>
                    <Typography variant="body1" className={classes.InfoText} >{profileUser?.country}</Typography>
                </Grid>
            </Grid>
            <Grid container mt={3} >
                <Grid item xs={5.5} className={classes.DataSectionForm} >
                    <Typography variant="body1" >State / Province</Typography>
                    <Typography variant="body1" className={classes.InfoText} > {profileUser?.state} </Typography>
                </Grid>
                <Grid item xs={5.5} className={classes.DataSectionForm} >
                    <Typography variant="body1" >Postal Code or ZIP</Typography>
                    <Typography variant="body1" className={classes.InfoText} >{profileUser?.zipCode}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
