import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CheckBox } from '@mui/icons-material';
import { Checkbox } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';

import { Link, useNavigate, Navigate } from "react-router-dom"
import { useState, useContext } from "react";
import { AuthContext } from '../../context/authContext';



const InitiatorItemLess = ({ initiator, initiatorsIds, setInitiatorsIds, selectItem, unSelectItem, checked }) => {
    const [isChecked, setIsChecked] = useState(true)
    const { currentUser } = useContext(AuthContext);
    const { id, phone, address, company_name, numOfProject, rating, tama38, pinuyBinuy, description, logo, name } = initiator

    const navigate = useNavigate()
    return (
        <>
            {/* {console.log(initiator,id)} */}
            <Card sx={{ maxWidth: 345, maxHeight: 450 }} raised>
                {/* <Checkbox checked={initiatorsIds.find(id => id === initiatorsIds)}
                    onChange={(e, checked) => {
                        if (checked) setInitiatorsIds([...initiatorsIds, initiator.id])
                        else setInitiatorsIds(initiatorsIds.filter(id => id !== initiator.id))
                    }}
                /> */}

                {/* <Checkbox checked={initiatorsIds.find(id=>id==initiator.id)} */}
                {/* <Checkbox checked={initiatorsIds.filter(id=>initiator.id==id).length}  */}
                <Checkbox checked={checked}

                    color='primary'
                    onChange={(e, checked) => {
                        //selectItem()
                        if (checked) selectItem(id)
                        else unSelectItem(id)
                        //setIsChecked(!isChecked)
                    }}
                />
               
                {/* <CardMedia
                    component='img'
                    alt={initiator.description}
                    height="140px"
                    width='50%'
                    src={`http://localhost:3600/images/${initiator.logo}`}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                /> */}

                <CardContent style={{ height: '100px' }}>
                    <Avatar
                        alt={initiator.name || initiator.company_name}
                        src={`http://localhost:3600/images/${initiator.logo}`}

                    />
                    <Typography variant="body2" color="text.secondary">
                        {name || ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {company_name || ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {phone || ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {address || ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {parseInt(numOfProject) || ""}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small" onClick={() => navigate(`${id}`)}>לפרטים נוספים</Button>
                </CardActions> */}
            </Card>
        </>
    )
}
export default InitiatorItemLess