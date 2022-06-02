import React,{useEffect} from "react";
import {Button,  Grid, Typography,} from "@mui/material";
import {makeStyles} from '@mui/styles';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import Moment from "react-moment";

const useStyles = makeStyles({
    boxStyle: {
        margin: "20px",
        paddingLeft: "3rem",
        paddingRight: "2rem",
    },
    gridStyle: {
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    buttonAlignmentStyle: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cancelButtonStyle: {
       marginTop:10,
    },
    labelNameStyle: {
           fontWeight:500,
        },
    fieldsStyle: {  
           fontSize:15,
           textAlign:'left',
        },
    ImagesStyle:{
        width:"60rem"
    }
       
});

const ViewComponent = ({site}) => {
    const classes = useStyles();
  return (
    <>
        <form className={classes.boxStyle}>
            <Grid className={classes.gridStyle} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                {/* <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                    <Typography className={classes.fieldsStyle} ><span className={classes.labelNameStyle}>Site Name : </span>  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
              <Typography className={classes.fieldsStyle} noWrap>  {site?.name} </Typography>
                   
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                    <Typography className={classes.fieldsStyle} ><span className={classes.labelNameStyle}>Street Address : </span>  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
              <Typography className={classes.fieldsStyle} noWrap>  {site?.streetAddress} </Typography>
               
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                    <Typography className={classes.fieldsStyle} ><span className={classes.labelNameStyle}>Country : </span>  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
              <Typography className={classes.fieldsStyle} noWrap>  {site?.country} </Typography>
                  
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                    <Typography className={classes.fieldsStyle} ><span className={classes.labelNameStyle}>City : </span>  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
              <Typography className={classes.fieldsStyle} noWrap>  {site?.city} </Typography>
                    
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                    <Typography className={classes.fieldsStyle} ><span className={classes.labelNameStyle}>PinCode : </span>  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
              <Typography className={classes.fieldsStyle} noWrap>  {site?.pinCode} </Typography>
                   
                </Grid> */}
                <Grid item xs={12} textAlign="center" >
                    <img src={`/uploads/${site.images}`} alt={`${site.images}`} loading="lazy" className={classes.ImagesStyle}/>
                </Grid>

            </Grid>
            <Stack
                spacing={2}
                direction="row"
                className={classes.buttonAlignmentStyle}
            >
                <Link href={"/site/"}>
                    <Button variant="outlined" className={classes.cancelButtonStyle}>Cancel</Button>
                </Link>
            </Stack>
        </form>
    </>
  )
}

export default ViewComponent