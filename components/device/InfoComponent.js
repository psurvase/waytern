import { Button, Card, Divider, Grid, Paper, Typography } from "@mui/material";import React from "react";import { makeStyles } from "@mui/styles";import VisibilityIcon from "@mui/icons-material/Visibility";import Box from "@mui/material/Box";import Link from "next/link";import Moment from "react-moment";import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import { deleteDeviceById } from "../../services/DeviceAction";import Router from "next/router";const useStyles = makeStyles((theme) => ({  deleteBtnStyle:{    textTransform: "capitalize"  },  cardStyle: {    marginTop: theme.spacing(1),  },  gridStyle: {    paddingLeft:theme.spacing(1.5),    paddingRight:theme.spacing(1.5),    paddingTop:theme.spacing(1.5),    paddingBottom:theme.spacing(1.5),   },}));const InfoComponent = ({ device }) => {  const classes = useStyles();  const deleteHandler = async () => {    const response = await deleteDeviceById(device.id);    await Router.push("/device");  };  return (    <>      <Paper className={classes.cardStyle}>        <Grid className={classes.gridStyle}>          <Grid container alignItems="center" >            <Grid              item              xs={6}              sm={3}              md={3}              alignItems="center"              display={"flex"}            >              <Typography  noWrap   fontWeight="bold">                Device Name :              </Typography>                    <Typography  noWrap pl=".5rem">                    {device.name}                  </Typography>            </Grid>            <Grid              item              xs={6}              sm={3}              md={3}              alignItems="center"              display={"flex"}            >              <Typography  noWrap   fontWeight="bold">                Status :              </Typography>                    <Typography  noWrap pl=".5rem">                    {device.status}                  </Typography>            </Grid>            <Grid              item              xs={6}              sm={3}              md={3}              alignItems="center"              display={"flex"}            >              <Typography  noWrap   fontWeight="bold">                X Coordinate :              </Typography>                    <Typography  noWrap pl=".5rem">                    {device.xCoordinate}                  </Typography>            </Grid>            <Grid              item              xs={6}              sm={3}              md={3}              alignItems="center"              display={"flex"}            >              <Typography  noWrap   fontWeight="bold">                Y Coordinate :              </Typography>                    <Typography  noWrap pl=".5rem">                    {device.yCoordinate}                  </Typography>            </Grid>            <Grid              item              xs={6}              sm={3}              md={3}              alignItems="center"              display={"flex"}            >              <Typography  noWrap   fontWeight="bold">                macId :              </Typography>                    <Typography  noWrap pl=".5rem">                    {device.macId}                  </Typography>            </Grid>            <Grid item xs={12} sm={3} md={3} textAlign="right">              <Link href={`/device/${device.id}`}>                <Button className={classes.deleteBtnStyle} variant="contained" endIcon={<VisibilityIcon />} >                  view                </Button>              </Link>            </Grid>          </Grid>          <Grid container alignItems="center" >            <Grid              item              xs={6}              sm={3}              md={3}            >            </Grid>            <Grid              item              xs={6}              sm={4}              md={4}              alignItems="center"              display={"flex"}            >            </Grid>            <Grid              item              xs={6}              sm={2}              md={5}              alignItems="center"              display={"flex"}            >            </Grid>          </Grid>          </Grid>          <Divider />          <Grid container className={classes.gridStyle}>            <Grid              item              xs={6}              md={9}              sm={4}              alignItems="center"              display={"flex"}            >            </Grid>            <Grid item xs={12} md={3} sm={3} textAlign="right">              <Button                 className={classes.deleteBtnStyle}                onClick={deleteHandler}                variant="contained"                endIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}              >                Delete              </Button>            </Grid>          </Grid>      </Paper>    </>  );};export default InfoComponent;