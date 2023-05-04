import { useContext, useEffect } from 'react'
import { useFormik, FormikValues } from "formik";
import { Button, TextField, IconButton } from '@mui/material';
import axios from "axios";
import { Checkbox } from '@material-ui/core';

import { AuthContext } from '../../../../context/authContext'
import { useState } from 'react';
import UploaderLogo from "../../../UploaderLogo";
import CloseIcon from '@mui/icons-material/Close';


const SingleIntiatorForm = ({ setIsEditing, initiator }) => {
    const [isChecked, setIsChecked] = useState(true)
    const [picture, setPicture] = useState('')
    const [initiatorData, setInitiatorData] = useState({ address: '', name: '', hp: 0, company_name: '', phone: 0, tama38: false, pinuyBinuy: false, description: '', logo: '' })
    useEffect(() => {
        async function fetchData() {

            const { data: _initiator } = await axios.get(`http://localhost:3600/initiator/${currentUser.id}`)
            //if (_initiator?.length) 
            setInitiatorData(_initiator)
            setPicture(_initiator.logo)
        }
        fetchData()
    }, []);
    const { token, currentUser } = useContext(AuthContext);
    //  const{id,hp,phone,address,tama38,pinuyBinuy,description,logo,name,company_name}=initiator;
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const { handleSubmit, handleChange, values, getFieldProps } = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...initiatorData
            // address: initiatorData.address,
            // name: initiatorData.name,
            // hp: initiatorData.hp,
            // company_name: initiatorData.company_name,
            // phone: initiatorData.phone,
            // tama38: initiatorData.tama38,
            // pinuyBinuy: initiatorData.pinuyBinuy,
            // description: initiatorData.description,
            // logo: initiatorData.logo
        },

        onSubmit: async (values) => {
            const { data: _initiators } = await axios.put(`http://localhost:3600/initiator/${currentUser.id}`, { hp: values.hp, phone: values.phone, address: values.address, tama38: values.tama38, pinuyBinuy: values.pinuyBinuy, description: values.description, logo: picture.path, name: values.name, company_name: values.company_name }, config)
        }

    });
    const handleRemovingImage = (picToRemove) => {

        setPicture('')
    }

    return <>
        in form
        {console.log(initiatorData, "form ,initiator:initiator")}
        {console.log(values, "form ,values")}
        <form onSubmit={handleSubmit} style={{ paddingTop: "60px" }}>

            <TextField
                value={values.name}
                id="outlined-basic"
                label="שם"
                variant="outlined"
                {...getFieldProps("name")}
                onChange={handleChange} />

            <TextField
                value={values.address}
                id="outlined-basic"
                label="כתובת"
                variant="outlined"
                {...getFieldProps("address")}
                onChange={handleChange} />
            {/* <TextField label="Address" fullWidth {...getFieldProps("address")} /> */}

            <TextField
                value={values.hp}
                id="outlined-basic"
                label="ח.פ."
                variant="outlined"
                {...getFieldProps("hp")}
                onChange={handleChange} />

            <TextField
                value={values.company_name}
                id="outlined-basic"
                label="שם חברה"
                variant="outlined"
                {...getFieldProps("company_name")}
                onChange={handleChange} />

            <TextField
                value={values.phone}
                id="outlined-basic"
                label="פלאפון"
                variant="outlined"
                {...getFieldProps("phone")}
                onChange={handleChange} />

            <TextField
                value={values.description}
                id="outlined-basic"
                label="תאור"
                variant="outlined"
                {...getFieldProps("description")}
                onChange={handleChange} />

            <TextField
                value={values.logo}
                id="outlined-basic"
                label="לוגו"
                variant="outlined"
                {...getFieldProps("logo")}
                onChange={handleChange} />
            {/* picture={picture} setPicture={setPicture}  */}
            <UploaderLogo picture={picture} setPicture={setPicture} label="Add Picture" />
            {picture ?
                <> {picture.name}
                    <IconButton onClick={() => handleRemovingImage(picture)}>
                        <CloseIcon />
                    </IconButton>
                </> :
                <></>}

            <Checkbox checked={values.tama38}
                {...getFieldProps("tama38")}
            //selectItem()
            // if (checked) selectItem(id)
            // else unSelectItem(id)
            // setIsChecked(!isChecked)

            />
            <Checkbox checked={values.pinuyBinuy}
                {...getFieldProps("pinuyBinuy")}
            />
            {console.log(values.tama38)}
            <Button type="submit" variant="outlined">שמירה</Button>
            <Button variant="outlined" onClick={() => setIsEditing(false)}>ביטול</Button>


        </form>
    </>
    {/* <Button variant="outlined">עריכה</Button> */ }
}
export default SingleIntiatorForm;


//onClick={() => setIsEditing(false)}s