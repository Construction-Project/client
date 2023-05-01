import { useState, useContext } from 'react'
import { useFormik, FormikValues } from "formik";
import { Button, TextField } from '@mui/material';
import axios from "axios";
import { AuthContext } from '../../../../context/authContext'
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';


const UpdateProject = (address, city, status, apartmentBefore, apartmentAfter, requestYear, permitYear, startConstructionYear, populatingYear, description) => {
    const theme = useTheme();
    const { token, currentUser } = useContext(AuthContext);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { handleSubmit, handleChange, values, getFieldProps, handleSubscribe } = useFormik({// async () => {

        initialValues: {
            address: address,
            city: city,
            status: status,
            apartmentBefore: apartmentBefore,
            apartmentAfter: apartmentAfter,
            requestYear: requestYear,
            permitYear: permitYear,
            startConstructionYear: startConstructionYear,
            populatingYear: populatingYear,
            description: description
        },
        //validationSchema:validationSchema,

        onSubmit: async (values) => {

            const {data:_initiators} = await axios.put(`http://localhost:3600/project/1`,{address:values.address,city:values.city,status:values.status,initiatorId:currentUser.id,apartmentBefore:values.apartmentBefore,apartmentAfter:values.apartmentAfter,requestYear:values.requestYear, permitYear:values.permitYear, populatingYear:values.populatingYear, description:values.description },config)

            handleClose();
        }

    });

    return (
        <Dialog fullScreen={fullScreen} >

            <TextField
                value={values.address}
                id="outlined-basic"
                label="כתובת"
                variant="outlined"
                {...getFieldProps("address")}
            />
            <TextField
                value={values.city}
                id="outlined-basic"
                label="עיר"
                variant="outlined"
                {...getFieldProps("city")}
            />
            <TextField
                value={values.status}
                id="outlined-basic"
                label="סטטוס"
                variant="outlined"
                {...getFieldProps("status")}
            />
            <TextField
                value={values.apartmentBefore}
                id="outlined-basic"
                label="מס' דירות לפני"
                variant="outlined"
                {...getFieldProps("apartmentBefore")}
            />

            <TextField
                value={values.apartmentAfter}
                id="outlined-basic"
                label="מס' דירות אחרי"
                variant="outlined"
                {...getFieldProps("apartmentAfter")}
            />

            <TextField
                value={values.requestYear}
                id="outlined-basic"
                label="שנת בקשה"
                variant="outlined"
                {...getFieldProps("requestYear")}
            />

            <TextField
                value={values.permitYear}
                id="outlined-basic"
                label="שנת אישור"
                variant="outlined"
                {...getFieldProps("permitYear")}
            />

            <TextField
                value={values.startConstructionYear}
                id="outlined-basic"
                label="שנת תחילת הבניה"
                variant="outlined"
                {...getFieldProps("startConstructionYear")}
            />
             <TextField
                value={values.populatingYear}
                id="outlined-basic"
                label="שנת איכלוס"
                variant="outlined"
                {...getFieldProps("populatingYear")}
            />
             <TextField
                value={values.description}
                id="outlined-basic"
                label="תאור"
                variant="outlined"
                {...getFieldProps("description")}
            />


            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    ביטול
                </Button>
                <Button onClick={handleSubscribe} autoFocus>
                    עידכון
                </Button>

            </DialogActions>


        </Dialog>
    );
}

export default UpdateProject