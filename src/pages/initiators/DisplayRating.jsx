
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
// import StarIcon from '@mui/icons-material/Star';


const DisplayRating = ({stars}) => {


  return (<>
    <Typography component="legend"></Typography>
    <Rating 
     name="read-only" 
    value={stars} readOnly
      precision={0.5}
        // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  
      
      />
     </>
    )
}

export default DisplayRating;
