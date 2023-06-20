import "../components/location.css"
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { DataBarris } from "./dataBarris"


export default function Location(){

  const center = [41.4032279396013, 2.194621913376098]

  
  return(
    <div >
      <select name="select">
        <option value="value0" defaultValue={'Select a neighborhood...'} >Select a neighborhood...</option>
        {
          DataBarris.map((elem) => 
            <option key={elem.id} defaultValue={elem.Nom_Barri} value={`value${elem.id}`}>{elem.name} </option> 
          )
        } 
        
      </select>
      
      <MapContainer
        center={center}
        zoom={12}
        className='leafletContainer'
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=5o1qU9n62Lzqg1WuACD0"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        
      </MapContainer>
    </div>
  )
}