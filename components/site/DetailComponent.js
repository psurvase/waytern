import { Card, Grid, IconButton} from '@mui/material';import React,{useState} from 'react'import EditIcon from "@mui/icons-material/Edit";import { Else, If, Then } from 'react-if';import { makeStyles } from '@mui/styles';import ViewComponent from './ViewComponent';import EditComponent from './EditComponent';const useStyles = makeStyles({    editIconStyle:{      float:"right",    }  })  // deliveryInfoEditconst DetailComponent = ({site}) => {    const classes = useStyles();  const [itemInfoEdit, setItemInfoEdit] = useState(false);  return (    <Card>        {itemInfoEdit && itemInfoEdit ? null : (        <IconButton         className={classes.editIconStyle}          onClick={() => setItemInfoEdit(!itemInfoEdit)}        >          <EditIcon />        </IconButton>      )}         <Grid item pt={3}>        <If condition={itemInfoEdit}>          <Then>            {() => (              <div>                <EditComponent site={site} />              </div>            )}          </Then>          <Else>            <div>             <ViewComponent site={site} />            </div>          </Else>        </If>      </Grid>    </Card>  )}export default DetailComponent