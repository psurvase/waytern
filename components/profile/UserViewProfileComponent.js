import {Box, Card, Grid, IconButton, Typography} from '@mui/material'
import { useEffect, useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import {makeStyles} from '@mui/styles';
import ProfilePicComponent from './ProfilePicComponent';
import {UserFormComponent} from './UserFormComponent';
import {Else, If, Then} from 'react-if';
import UserEditProfileComponent from './UserEditProfileComponent';
import {useAppContext} from "../../context/AppContext";

const useStyles = makeStyles(theme => ({
    EditButton: {
        float: theme.spacing('right'),
        padding: theme.spacing(1)
    },
    DataSection: {
        paddingTop: theme.spacing(3.5),
        paddingLeft: theme.spacing(4.5)
    }
}));
export default function UserViewProfileComponent({ profileUser }) {
    const classes = useStyles();
    const [userProfileEditMode, setUserProfileEditMode] = useState(false)
    const [userDescriptionEditMode, setUserDescriptionEditMode] = useState(false)

    const { setPageName } = useAppContext()
    useEffect(() => {
        setPageName("Profile");
    }, [])
    return (
        <>
            <Box>
                <Grid container spacing={1}   >
                    <Grid item xs={4} md={3} sm={4}>
                        <Card>
                            <Typography className={classes.EditButton} >

                                {userDescriptionEditMode && userDescriptionEditMode ? (
                                    null
                                ) : (
                                    <IconButton onClick={() => setUserDescriptionEditMode(!userDescriptionEditMode)} >
                                        <EditIcon />
                                    </IconButton>
                                )}
                            </Typography>
                            <ProfilePicComponent
                                userDescriptionEditMode={userDescriptionEditMode}
                                setUserDescriptionEditMode={setUserDescriptionEditMode}
                                profileUser={profileUser} />
                        </Card>
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Card>
                                    <Grid item xs={12} className={classes.EditButton} >
                                        {userProfileEditMode && userProfileEditMode ? (
                                            null
                                        ) : (
                                            <IconButton onClick={() => setUserProfileEditMode(!userProfileEditMode)} >
                                                <EditIcon />
                                            </IconButton>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} className={classes.DataSection}  >
                                        {userProfileEditMode && userProfileEditMode ? (
                                            <Typography variant="h6" >PROFILE SETTINGS</Typography>
                                        ) : (
                                            <Typography variant="h6" >PROFILE</Typography>
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <If condition={userProfileEditMode}>
                                            <Then>{() =>
                                                <div>
                                                    <UserEditProfileComponent userProfileEditMode={userProfileEditMode}
                                                        setUserProfileEditMode={setUserProfileEditMode}
                                                        profileUser={profileUser}
                                                    />
                                                </div>
                                            }</Then>
                                            <Else>
                                                <div>
                                                    <UserFormComponent profileUser={profileUser} />
                                                </div>
                                            </Else>
                                        </If>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}
