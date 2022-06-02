import {Box, Grid} from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles';
import EditProfileComp from './EditProfileComp';

const useStyles = makeStyles(theme => ({
    EditButton: {
        float: theme.spacing('right'),
        padding: theme.spacing(1)
    }
}));
export default function UserEditProfileComponent({ userProfileEditMode, setUserProfileEditMode,profileUser }) {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Grid container spacing={1} >
                    <Grid item xs={12} >
                        <EditProfileComp setUserProfileEditMode={setUserProfileEditMode}
                            userProfileEditMode={userProfileEditMode}  profileUser={profileUser}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
