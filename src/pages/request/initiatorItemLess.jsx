import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link ,useNavigate,Navigate} from "react-router-dom"
import { useState,useContext } from "react";
import { AuthContext } from '../../context/authContext';



const InitiatorItemLess = (initiator) => {

    const { currentUser } = useContext(AuthContext);
    const { id, phone, address, company_name, numOfProject, rating, tama38, pinuyBinuy, description, logo, name } = initiator

    const navigate = useNavigate()
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {company_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {parseInt(numOfProject)}
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>navigate(`${id}`)}>לפרטים נוספים</Button>
                    
                </CardActions>
            </Card>
            <br></br><br></br>
        </>
    )

}
export default InitiatorItemLess