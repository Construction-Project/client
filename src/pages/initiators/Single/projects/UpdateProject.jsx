import { useContext } from 'react'
import { useFormik, FormikValues} from "formik";
import {Button ,TextField} from '@mui/material';
import axios from "axios";
import { AuthContext } from '../../../../context/authContext'
const UpdateProject = () => {

    const {token,currentUser} = useContext(AuthContext);

    const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }
   
    const { handleSubmit ,handleChange ,values ,getFieldProps} = useFormik({
        initialValues: {
            address:'some address',
            name:'some name',
            hp:0,
            company_name:""
        },

         onSubmit: async(values)=>{                                                                       
            
            //const {data:_initiators} = await axios.put(`http://localhost:3600/project/1`,{address:values.address,city:values.city,status:status,initiatorId:currentUser.id,apartmentBefore:1,apartmentAfter:9,requestYear, permitYear, populatingYear, description },config)
        }

        });
    return (
        <>ygngfyjjyhj</>
    );

}

export default UpdateProject