import React, { useState } from 'react'
import { Box, Grid, IconButton, Typography, Avatar } from '@mui/material'
import { Else, If, Then } from 'react-if';
import { makeStyles } from '@mui/styles';
import FlagIcon from '@mui/icons-material/Flag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DescriptionComponent from './DescriptionComponent';


const useStyles = makeStyles({
    centerContent: {
        display: 'flex',
        justifyContent: 'center'
    },
    centerContentPara: {
        textAlign: 'justify'
    },
    hoverBtnStyleMessage: {
        display: 'none'
    },
    hoverBtnStyle: {
        position: 'absolute',
        top: '27%',
        left: '21.8%',
        zIndex: '111',
        width: '7%',
        height: '3.5%',
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
        cursor: 'pointer',
    },
    hoverDiv: {
        '&:hover': {
            opacity: '0.3',
            color: 'black'
        }
    }
});
export default function ProfilePicComponent({ profileUser, userDescriptionEditMode, setUserDescriptionEditMode }) {
    const classes = useStyles();
    const [image, setImage] = useState('')

    const [hover, setHover] = useState(false)
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/image", {
            method: "POST",
            body
        });
    };

    return (
        <Box>
            <Grid container  >
                <Grid item md={12} sm={12} xs={12}>
                    <Typography className={classes.centerContent} >
                        <If condition={userDescriptionEditMode}>
                            <Then>{() =>
                                <div
                                    onMouseOver={() => setHover(true)}
                                    onMouseOut={() => setHover(false)}
                                >
                                    {hover ? (
                                        <div>
                                            <input type="file"
                                                onChange={uploadToClient}

                                                className={classes.hoverBtnStyleMessage}
                                                id='file'
                                            />
                                            <label htmlFor='file'
                                                className={classes.hoverBtnStyle}
                                            >Choose Pic</label>
                                        </div>
                                    ) : (null)}
                                    <Avatar src={createObjectURL} alt="my image"
                                        sx={{ width: 142, height: 142 }}
                                        className={classes.hoverDiv}
                                    />
                                    {/* uploaded pic avatar */}


                                    <button

                                        type="submit"
                                        onClick={uploadToServer}
                                    >Upload Pic</button>
                                </div>
                            }</Then>
                            <Else>
                                {/* google image avatar */}
                                <Avatar
                                    src={profileUser?.image}
                                    alt="profile pic"
                                    sx={{ width: 142, height: 142 }}
                                />
                            </Else>
                        </If>
                    </Typography>
                    <Typography variant='h5' className={classes.centerContent} mt={2}>{profileUser?.name}</Typography>
                    <If condition={userDescriptionEditMode}>
                        <Then>{() =>
                            <DescriptionComponent userDescriptionEditMode={userDescriptionEditMode}
                                setUserDescriptionEditMode={setUserDescriptionEditMode}
                                profileUser={profileUser}
                            />
                        }</Then>
                        <Else>
                            <Typography variant='body1' p={2} className={classes.centerContentPara} mt={4} >
                                {profileUser?.description}
                            </Typography>
                        </Else>
                    </If>
                </Grid>
                <Grid item p={1}  >
                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={1.5}>
                            <Typography >
                                <IconButton>
                                    <FlagIcon />
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography p={1} pl={1}>
                                {profileUser?.country}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={1.5}>
                            <Typography>
                                <IconButton >
                                    <MailOutlineIcon />
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography p={1} pl={1} noWrap >
                                {profileUser?.email}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}    >
                        <Grid item xs={1.5}>
                            <Typography >
                                <IconButton >
                                    <PhoneInTalkIcon />
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography p={1} pl={0.8}>
                                +91-{profileUser?.phone}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
