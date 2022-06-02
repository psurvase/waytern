import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import ArticleIcon from "@mui/icons-material/Article";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from '@mui/icons-material/Business';
import CommentIcon from '@mui/icons-material/Comment';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Switch, { Case, Default } from "react-switch-case";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";


// import FlightIcon from '@mui/icons-material/Flight';
import GavelIcon from '@mui/icons-material/Gavel';
// Terms and condition
import PolicyIcon from '@mui/icons-material/Policy';
// Privacy and Policy
import InfoIcon from '@mui/icons-material/Info';
// about us
import { BorderColor, Flight, Store, GppGood, Gavel, Policy, Info } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  MenuList: {
    paddingLeft: theme.spacing(1),
  },
  MenuItem: {
    marginTop: theme.spacing(0.75),
  },
  listItemIcon: {
    height: theme.spacing(2.4),
    width: theme.spacing(2.4),
  },
  companyName: {
    fontSize: "1rem",
  },
}));

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/dashboard",
    icon: "DashboardIcon",
  },
  { id: "Users", label: "Users", link: "/user", icon: "GroupIcon" },
  { id: "Sites", label: "Sites", link: "/site", icon: "BusinessIcon" },
  { id: "Devices", label: "Devices", link: "/device", icon: "DeviceHubIcon" },
  { id: "Messages", label: "Messages", link: "/message", icon: "CommentIcon" },

];

export default function SideMenuComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid>
        <Typography fontWeight="bold" pl={3.8} className={classes.companyName}>
          WHIZ IT
        </Typography>
      </Grid>
      <MenuList className={classes.MenuList}>
        {menuItems?.map((menuItem, index) => (
          <MenuItem key={index} className={classes.MenuItem}>
            <Link href={menuItem.link}>
              <ListItemIcon>
                <Switch condition={menuItem.icon}>
                  <Case value="DashboardIcon">
                    <DashboardIcon
                      color="primary"
                      className={classes.listItemIcon}
                    />
                  </Case>

                  <Case value="GroupIcon">
                    <GroupIcon
                      color="primary"
                      className={classes.listItemIcon}
                    />
                  </Case>
                  <Case value="BusinessIcon">
                    <BusinessIcon
                      color="primary"
                      className={classes.listItemIcon}
                    />
                  </Case>
                  <Case value="DeviceHubIcon">
                    <DeviceHubIcon
                      color="primary"
                      className={classes.listItemIcon}
                    />
                  </Case>
                  <Case value="CommentIcon">
                    <CommentIcon
                      color="primary"
                      className={classes.listItemIcon}
                    />
                  </Case>
                  <Default>
                    <ArticleIcon
                      color="primary"
                      className={classes.listItemIcon}
                    />
                  </Default>
                </Switch>
              </ListItemIcon>
            </Link>
            {matches && (
              <Link href={menuItem.link}>
                <ListItemText
                  primary={menuItem.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "primary.dark",
                    fontWeight: 500,
                  }}
                />
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuList>
      <Grid>
        <Typography
          fontWeight="bold"
          pl={3}
          pt={2}
          className={classes.companyName}
        >

        </Typography>
      </Grid>
    </>
  );
}
