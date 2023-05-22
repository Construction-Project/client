import { useEffect, useState } from "react"
import Proj4 from "proj4"
const MapGov = ({ address }) => {

    const [cords, setCords] = useState({})
    const getCord = async () => {
        const response = await fetch('http://localhost:3600/map/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({ address: address })
        })
        if (response?.ok) {
            const cordsResponse = await response.json()
            console.log(cordsResponse)
            setCords(cordsResponse)
        }
    }
    useEffect(() => {
        console.log(address,"address before")
        getCord()

        
    }, [address])
    

    return (
        <div>
            <>{cords.lat}</><br></br>
            <>{cords.lng}</><br></br>
            <iframe id='ifrMap' frameborder='0' marginheight='0' marginwidth='0' width='450px' height='350px' src={`https://www.govmap.gov.il/map.html?bb=1&zb=1&in=1&c=${cords.lat*1000},${cords.lng*1000}&z=8`} > </iframe>
        </div>
    )
}
export default MapGov


