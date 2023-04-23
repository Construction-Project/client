
import { useState } from "react"
import Location from "./Location/autoCompleteMap"


const Simulator = () => {
  const [location,setLocation] = useState("")

  return (
    <>
    <div style={{paddingTop:"60px"}}>Simulator</div>

<Location setLocation={setLocation}></Location>

</>
    
  )
}

export default Simulator