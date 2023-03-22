
import {Rating,Typography} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Rating1 = ({ stars }) => {
  return (<>
    <Typography component="legend"></Typography>
    <Rating
      name="read-only"
      value={stars} readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
  </>
  )
}

export default Rating1;
