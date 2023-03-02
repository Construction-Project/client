import { Link ,useNavigate} from "react-router-dom"
import { Navigate } from "react-router-dom";

const InitiatorItem = ({initiator}) => {
  

  
  
  return (
    <>
    <div>{initiator.id}</div>
    <div>{initiator.name}</div>
    <div>{initiator.phone}</div>
    <div>{initiator.address}</div>

    <Link><button>לפרטים נוספים</button></Link>
    
    </>
  )
}

export default InitiatorItem;

