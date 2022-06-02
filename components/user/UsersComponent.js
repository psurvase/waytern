import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useAppContext } from "../../context/AppContext";
import UserComponent from "./UserComponent";
import { deleteManyUser } from "../../services/UserAction";
import DeleteIcon from "@mui/icons-material/Delete";
import { signIn, signOut, useSession } from "next-auth/react";
import Router from "next/router";

const useStyles = makeStyles({
  gridbtnstyle: {
    paddingRight: "8px",
    textAlign: "right",
    marginBottom: "17px",
  },
  btnstyle: {
    borderRadius: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginRight:"5px"
  },
  tablerowstyle: {
    borderRadius: "10px",
    padding: "12px",
    margin: "6px",
  },
});
const UsersComponent = ({ users }) => {
  
  const [checked, setChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const changeCheckboxStatus = (event) => {
    setChecked(event.target.checked);
    if(event.target.checked){
      setSelectedIds(users.map((u)=> u.id ));
    }else{
      setSelectedIds([])
    }
  };


  
  const handleClick = async () => {
    const response = await deleteManyUser(selectedIds);
    users = [];
    setChecked(false);
  };

  const classes = useStyles();
  const { setPageName } = useAppContext();
  useEffect(() => {
    setPageName("Users");
  }, []);

  return (
    <>
      <Box>
        <Grid className={classes.gridbtnstyle}>
          {checked ? (
            <Button
              onClick={handleClick}
              className={classes.btnstyle}
              variant="contained"
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          ) : (
            ""
          )}
          <Button
            className={classes.btnstyle}
            variant="contained"
            endIcon={<AddIcon />}
          >
            Add new
          </Button>
        </Grid>
        <Card component={Card} className={classes.tablerowstyle}>
          <Grid container xs={12} alignItems="center">
            <Grid item xs={0.5}>
              <Checkbox onChange={changeCheckboxStatus} checked={checked} />
            </Grid>
            {/* extra Space */}
            <Grid item xs={1} />
            <Grid item xs={2.3}>
              <Typography fontWeight="bold">Name</Typography>
            </Grid>
            <Grid item xs={2.4}>
              <Typography fontWeight="bold">Date</Typography>
            </Grid>
            <Grid item xs={2.4}>
              <Typography fontWeight="bold">Role</Typography>
            </Grid>
            <Grid item xs={2.4}>
              <Typography fontWeight="bold">Status</Typography>
            </Grid>
            <Grid item xs={1} textAlign="right">
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
        {users &&
          users.map((user, index) => {
            return (
              <>
                <UserComponent
                  key={index}
                  user={user}
                  parentChecked={checked}
                />
              </>
            );
          })}
      </Box>
    </>
  );
};
export default UsersComponent;
