import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useAppContext } from "../../context/AppContext";
import { styled } from '@mui/material/styles';
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles(theme => ({

    main: {
        backgroundColor: theme.palette.background.default
    },
    avatarImg: {
        height: theme.spacing(3.5)+' !important',
        width: theme.spacing(3.5)+' !important'

    },
    innerMain: {
        // paddingRight:'0px !important'
    },

}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function HeaderComponent() {
    const { pageName } = useAppContext()

    const classes = useStyles();
    const { data: session } = useSession()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // second list

    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.main} elevation={0}>
                <Toolbar className={classes.innerMain}>
                    
                <Grid container>
                    <Grid item xs={1.7}>
                        {/* <MenuIcon color="primary" /> */}
                        <Image src="/images/logo/logo-dds.svg" width={133} height={46}  alt="logo" />
                    </Grid>
                    <Grid item xs={7.2}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                           
                            color="primary"
                        >
                            {pageName}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex" justifyContent="flex-end">
                        <IconButton><MailOutlineIcon color="primary" /></IconButton>
                        <IconButton><SettingsIcon color="primary" /></IconButton>
                        <Link href={'/notification/'} passHref>
                        <IconButton><NotificationsIcon /></IconButton>
                        </Link>
                        <IconButton onClick={handleClick2}>
                            <Avatar alt="John deo" src={session?.user?.image} className={classes.avatarImg} />
                        </IconButton>
                        <Menu
                            id="basic-menu2"
                            anchorEl={anchorEl2}
                            open={open2}
                            onClose={handleClose2}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button2',
                            }}
                        >
                            <MenuItem onClick={handleClose2}>
                                <Link href={'/user/profile/'}>
                                    Profile
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose2}>Setting</MenuItem>
                            <MenuItem onClick={handleClose2}>
                                <Typography>
                                    {session && session.user ? (
                                        <>
                                            <div onClick={() => signOut()} >
                                                <Link href={'/api/auth/signin'}>
                                                    Logout
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div onClick={() => signIn()}>Sign in</div>
                                        </>
                                    )}
                                </Typography>
                            </MenuItem>
                        </Menu>
                        </Box>
                        
                        
                        
                    </Grid>
                    
                </Grid>
                    
                </Toolbar>
            </AppBar>

        </Box>
    );
}
