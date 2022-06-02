import React, {useEffect} from 'react'
import {useAppContext} from "../../context/AppContext";
import {Box, Grid} from '@mui/material';
import DemoWidgetComponent from "./widgets/DemoWidgetComponent";


const DashboardComponent = ({ }) => {

  const { setPageName } = useAppContext()
  useEffect(() => {
    setPageName("Dashboard");
  }, [])


  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            this is dashboard template
          </Grid>
          <Grid item xs={12}>
            <DemoWidgetComponent/>
          </Grid>
        </Grid>
      </Box>


    </>
  )
}


export default DashboardComponent;
