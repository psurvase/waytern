import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Grid,InputLabel} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Stack from "@mui/material/Stack";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useRouter } from 'next/router';

import {createSite} from "../../services/SiteAction";
import ImageUpload from "./uploadImage/ImageUpload";

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        display: "flex",
        justifyContent: "flex-end",
    },
    errorFieldStyle: {
        fontSize: "14px",
        color: "red",
    },
}));

const schema = yup
    .object({
        name: yup.string().required(),
            
            
        streetAddress: yup.string().required(),
            
            
        pinCode: yup.string().required(),
        images: yup.string().required(),  
            
    }).required();

const countries = [
    { id: 1, name: "IN", label: 'India' },{ id: 1, name: "USA", label: 'America' }
  ];
const cities = [
    { id: 1, name: "PUNE", label: 'Pune' },
  ];
const CreateComponent = () => {
    const [city, setCity] = React.useState("");
    const [country, setCountry] = React.useState("");






    const [checked, setChecked] = React.useState(false);    
    const handleStatus = (e) => {
        setChecked(true);
    };     

    const router = useRouter();
    const {
        register,
        watch,
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
         

            name:"",
            streetAddress:"",
            country:"",
            city:"",
            pinCode:"",
            images:"",

        },
    });
  
    const onSubmit = async (data) => {
        try {
            const body = {

                name: data?.name,
                streetAddress: data?.streetAddress,
                country:country,
                city:city,
                pinCode: data?.pinCode,
                images:data?.images


            
            };

            await createSite(body)
            await router.push("/site");
        } catch(error) {
            console.error(error);
        }
    };
    const classes = useStyles();
    return (<>
        <Card elevation={0}>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} m={2}>
                    <Grid pl={5} pt={2}>
                        <Typography fontWeight="bold" color="#334D6E">
                            Add Sites
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} pl={5} pr={3} pt={3} pb={5}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} pr={2}>
                        <Typography >Site Name</Typography>
                            <TextField
                                    size="small"
                                    {...register("name")}
                                    fullWidth
                                    placeholder="Site Name"
                                ></TextField>
            
                            
                            <span className={classes.errorFieldStyle}>
                              {errors.name?.message}
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} pr={2}>
                        <Typography >Street Address</Typography>
                            <TextField
                                    size="small"
                                    {...register("streetAddress")}
                                    fullWidth
                                    placeholder="Street Address"
                                ></TextField>
            
                            
                            <span className={classes.errorFieldStyle}>
                              {errors.streetAddress?.message}
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} pr={2}>
                        <Typography >Country</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" />
                                <Select
                                    size="small"
                                    labelId="select-Country"
                                    id="country"
                                    value={country}
                                    label="Country"
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    {countries &&
                                    countries.map((su) => (
                                        <MenuItem key={su.id} value={su.name}>
                                        {su.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
            
                            
                            <span className={classes.errorFieldStyle}>
                              {errors.country?.message}
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} pr={2}>
                        <Typography >City</Typography>
                            <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" />
                                        <Select
                                            size="small"
                                            labelId="select-City"
                                            id="city"
                                            value={city}
                                            label="City"
                                            onChange={(e) => setCity(e.target.value)}
                                        >
                                            {cities &&
                                            cities.map((su) => (
                                                <MenuItem key={su.id} value={su.name}>
                                                {su.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
            
                            
                            <span className={classes.errorFieldStyle}>
                              {errors.city?.message}
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} pr={2}>
                        <Typography >PinCode</Typography>
                                <TextField
                                    size="small"
                                    {...register("pinCode")}
                                    fullWidth
                                    placeholder="PinCode"
                                ></TextField>
            
                            
                            <span className={classes.errorFieldStyle}>
                              {errors.pinCode?.message}
                            </span>
                        </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3} pr={2}>
                        <Typography >Map Name</Typography>
                            <TextField
                                    size="small"
                                    {...register("images")}
                                    fullWidth
                                    placeholder="Site Name"
                                ></TextField>
            
                            
                            <span className={classes.errorFieldStyle}>
                              {errors.images?.message}
                            </span>
             </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pr={2}>
                         <ImageUpload />
                    </Grid>
                    <Grid className={classes.buttonStyle} mt={2} pr={5}>
                        <Stack direction="row" spacing={3}>
                            <Button
                                style={{color: "#334D6E"}}
                                variant="outlined"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                            >
                                Save
                            </Button>
                        </Stack>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    </>)
}

export {CreateComponent};
