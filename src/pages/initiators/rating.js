import { useState } from 'react'
import {Rating} from 'react-simple-star-rating'

const RatingInitiator=()=>{
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate) => {

      setRating(rate)
      // Some logic
    } 
    return (<>
        <Rating
        
          onClick={handleRating}
          ratingValue={rating}
          size={100}
          label
          transition
          fillColor='orange'
          emptyColor='gray'
          className='foo' // Will remove the inline style if applied
        />
        {/* Use rating value */}
        {/* {rating} */}</>
)

}

export default RatingInitiator
  
//react-simple