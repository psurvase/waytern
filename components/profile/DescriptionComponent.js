import React from 'react'
import { Button, Grid, TextField, Paper, TextareaAutosize } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Router from "next/router";
import { updateUserProfileDescription } from "../../services/UserAction";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    autoTextDescription: {
        width: '100%',
    },
    ParentBtnSesction: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    spanDiv: {
        color: 'red',
        fontSize: '12px'
    }
}));
export default function DescriptionComponent({ userDescriptionEditMode, setUserDescriptionEditMode, profileUser }) {
    const classes = useStyles();
    const validationSchema = Yup.object().shape({
        description: Yup.string().required('Description is Required'),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            description: profileUser?.description
        }
    }
    );
    const getUser = (data) => {
        return {
            id: profileUser.id,
            description: data.description 
        };
    }
    const onSubmit = async (data) => {
        console.log(data);
        reset({ description: '' });
        const response = await updateUserProfileDescription(getUser(data))
        if (response.ok) {
            await Router.push('/user/profile');
        } else {
            console.log('Data saving error')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={0}>
                    <Grid item xs={10} mt={4} ml={3.5}>
                        <TextareaAutosize
                            className={classes.autoTextDescription}
                            placeholder="Description"
                            {...register("description")}
                            minRows={4}
                        />
                        <span className={classes.spanDiv}>{errors.description?.message}</span>
                    </Grid>
                    <Grid container mt={6} >
                        <Grid item xs={12} className={classes.ParentBtnSesction} >
                            <Button variant="outlined" className={classes.btn1}
                                onClick={() => setUserDescriptionEditMode(!userDescriptionEditMode)}
                            >
                                Cancel
                            </Button>
                           
                            <Button variant="contained" type="submit" className={classes.btn1}>
                                Save
                            </Button>
                           
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
