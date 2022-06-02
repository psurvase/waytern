import {
  Avatar,
  Card,
  Checkbox,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Moment from "react-moment";
import Link from "next/link";
import { deleteUserById, updateStatusUserById } from "../../services/UserAction";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  tablerowstyle: {
    borderRadius: "10px",
    padding: "12px",
    margin: "6px",
  },
});

const UserComponent = ({ user, parentChecked }) => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState();

  useEffect(() => {
    setChecked(parentChecked);
  }, [parentChecked]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleDeleteById = async () => {
    const response = await deleteUserById(user);
    await window.location.reload();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async (status) => {
      const response = await updateStatusUserById(user.id, status);
    setAnchorEl(null);
  };
  // switch
  const [status, setStatus] = useState(user.status)
  const handleSwitch =(e)=>{
      console.log("this is switch",e.target.checked);

  }

  const classes = useStyles();
  return (
    <>
      <Card component={Card} className={classes.tablerowstyle}>
        <Grid container xs={12} alignItems="center">
          <Grid item xs={0.5}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Grid>
          <Grid item xs={1}>
            <Avatar alt="Cindy Baker" src="./images/initials.png" />
          </Grid>
          <Grid item xs={2.3} container alignItems="center">
            <Link href={`/user/${user.id}`}>
              <Typography fontWeight="bold">{user?.name}</Typography>
            </Link>
          </Grid>
          <Grid item xs={2.4}>
            <Typography>
              <Moment format="DD/MM/YYYY">{user?.createdAt}</Moment>
            </Typography>
          </Grid>
          <Grid item xs={2.4}>
            <Typography>Admin</Typography>
          </Grid>
          <Grid item xs={2.4}>
            <Switch disabled checked={status}
            //  {checked ? true: false}
              onChange={handleSwitch}/>
          </Grid>
          <Grid item xs={1} textAlign="right">
            {checked ? (
              <IconButton onClick={handleDeleteById}>
                <DeleteIcon />
              </IconButton>
            ) : (
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleButtonClick}
              >
                <MoreHorizIcon className={classes.iconColor} />
              </IconButton>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={()=>{handleClose(true)}}>Active</MenuItem>
              <MenuItem onClick={()=>{handleClose(false)}}>Inactive</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default UserComponent;
