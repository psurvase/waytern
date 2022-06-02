import { React } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { Card, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Router from "next/router";
import { updateUserProfile } from "../../services/UserAction";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    imageSection: {
        height: '100%'
    },
    rightSection: {
        background: 'grey',
        position: 'relative',
    },
    innerSection: {
        display: 'flex',
        justifyContent: 'center'
    },
    inputSection: {
        border: ' 0.5px solid rgba(180, 201, 207, 0.5)'
    },
    parent: {
        display: 'flex !important',
        justifyContent: 'space-between',
        float: 'right'
    },
    topSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },
    secondSection: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '1rem'
    },
    btn1: {
        width: '9.5rem'
    },
    spanDiv: {
        color: 'red',
        fontSize: '12px'
    },
    labelName: {
        color: '#5D6C71',
        fontSize: '15px !important'
    },
    textFeild: {
        width: '100%',
    }
}));
const EditProfileComp = ({ userProfileEditMode, setUserProfileEditMode, profileUser }) => {
    const classes = useStyles();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Username is Required'),
        address: Yup.string().required('Address is Required'),
        emailSignUp: Yup.string().email().required("Invalid Email"),
        city: Yup.string().required("City is Required"),
        phone: Yup.string().required("Phone is Required").max(10, 'Max 10 Digit Mobile No. only ').min(10, 'Min 10 Digit Mobile No. only'),
        country: Yup.string().required("Country is Required"),
        postal: Yup.string().required("Postal is Required").max(6, "6 digit Pincode").min(6, "6 digit Pincode"),
        province: Yup.string().required("State is Required"),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: profileUser?.name, address: profileUser?.address, emailSignUp: profileUser?.email,
            city: profileUser?.city, phone: profileUser?.phone, country: profileUser?.country,
            postal: profileUser?.zipCode, province: profileUser?.state
        }
    }
    );
    const getUser = (data) => {
        return {
            id: profileUser.id,
            name: data.name,
            address: data.address,
            email: data.emailSignUp,
            city: data.city,
            phone: data.phone,
            country: data.country,
            zipCode: data.postal,
            state: data.province
        };
    }
    const onSubmit = async (data) => {
        console.log(data);
        reset({ name: '', address: '', emailSignUp: '', city: '', phone: '', country: '', postal: '', province: '' });
        const response = await updateUserProfile(getUser(data))
        if (response.ok) {
            await Router.push('/user/profile');
        } else {
            console.log('Data saving error')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <CardContent>
                    <Grid container spacing={2} className={classes.secondSection}>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName}>
                                User Name
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                placeholder="John"
                                {...register("name")}
                            />
                            <span className={classes.spanDiv}>{errors.name?.message}</span>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName}>
                                Email
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                placeholder="johndoe@gmail.com"
                                {...register("emailSignUp")}
                            />
                            {errors?.emailSignUp?.type === "required" &&
                                <span className={classes.spanDiv}>This field is required</span>}
                            {errors.emailSignUp?.type === 'email' &&
                                <span className={classes.spanDiv}>Invalid email id</span>}
                        </Grid>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName}>
                                Phone
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                placeholder="Phone"
                                {...register("phone")}
                            />

                            <span className={classes.spanDiv}>  {errors.phone?.message}</span>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName}>
                                Address
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Address"
                                {...register("address")}
                            />
                            <span className={classes.spanDiv}> {errors.address?.message}</span>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName}>
                                City
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                placeholder="City"
                                {...register("city")}
                            />
                            <span className={classes.spanDiv}>
                                {errors.city?.message}
                            </span>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName}>
                                Country
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                placeholder="Country"
                                {...register("country")}
                            />
                            <span className={classes.spanDiv}>     {errors.country?.message}</span>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName}>
                                State/Province
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                placeholder="State/Province"
                                {...register("province")}
                            />
                            <span className={classes.spanDiv}> {errors.province?.message}</span>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Typography className={classes.labelName} variant="body1">
                                Postal Code or ZIP
                            </Typography>

                            <TextField size="small" className={classes.textFeild}
                                placeholder="Postal Code or ZIP"
                                {...register("postal")}
                            />
                            <span className={classes.spanDiv}>  {errors.postal?.message}</span>
                        </Grid>
                        <Grid xs={5.5}></Grid>
                        <Grid container mt={4} xs={5.5} pl={2} className={classes.parent}>
                            <Button variant="outlined" className={classes.btn1}
                                onClick={() => setUserProfileEditMode(!userProfileEditMode)}
                            >
                                Cancel
                            </Button>
                            <Button variant="contained" type="submit" className={classes.btn1}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
}
export default EditProfileComp
